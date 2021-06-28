import { interpreter } from "modl-interpreter";
import vercelService from "../../../../utils/services/vercelService";

const domain = "fantini.dev";

const handler = async (req, res) => {
    const { method, body } = req;

    try {
        switch (method) {
            case "GET":
                const dns = await vercelService.dns.get(domain);
                const txtRecords = dns.records
                    .filter((record) => record.type === "TXT")
                    .map((record) => {
                        const { value, id } = record;
                        return { ...interpreter.interpretToJsonObject(value), id };
                    });
                return res.json(txtRecords);
            case "POST":
                if (!body.record) {
                    return res.status(40).json({
                        status: 400,
                        error: "record is mandatory",
                    });
                }
                await vercelService.dns.create(domain, body.record);
                return res.json();
            default:
                res.setHeader("Allow", ["GET", "POST"]);
                return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message, {
            request: {
                url: req.url,
                method: req.method,
                query: req.query,
                body: req.body,
            },
            response: {
                status: 500,
                error: e,
            },
        });
        return res.status(500).json({
            status: 500,
            error: e.message,
        });
    }
};

export default handler;
