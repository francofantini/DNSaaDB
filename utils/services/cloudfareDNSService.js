import axios from "axios";
import { interpreter } from "modl-interpreter";

const baseUrl = "https://cloudflare-dns.com/dns-query";

const getTXTRecord = ({ name }) => {
    const params = {
        name,
        type: "TXT",
        dnssec: 0,
        ct: "application/dns-json",
    };
    return axios.get(baseUrl, { params }).then((res) => {
        const answer = res?.data?.Answer?.[0].data;
        const parsedAnswer = answer.replaceAll('"', "");
        return interpreter.interpretToJsonObject(parsedAnswer);
    });
};

export default {
    getTXTRecord,
};
