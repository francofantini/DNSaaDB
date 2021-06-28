import vercelService from "../../../../utils/services/vercelService";

const domain = "fantini.dev";

const handler = async (req, res) => {
    const { method, query } = req;

    try {
        switch (method) {
            case "DELETE":
                if (!query.id) {
                    return res.status(40).json({
                        status: 400,
                        error: "id is mandatory",
                    });
                }
                await vercelService.dns.remove(domain, query.id);
                return res.json();
            default:
                res.setHeader("Allow", ["DELETE"]);
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
