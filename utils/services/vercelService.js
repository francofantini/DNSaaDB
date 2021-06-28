import axios from "axios";

const baseUrl = "https://api.vercel.com";

const headers = {
    Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
};

const get = (domain) => {
    return axios.get(`${baseUrl}/v4/domains/${domain}/records`, { headers }).then((res) => {
        return res.data;
    });
};
const create = (domain, record) => {
    return axios.post(`${baseUrl}/v4/domains/${domain}/records`, record, { headers }).then((res) => {
        return res.data;
    });
};
const remove = (domain, id) => {
    return axios.delete(`${baseUrl}/v2/domains/${domain}/records/${id}`, { headers }).then((res) => {
        return res.data;
    });
};

export default {
    dns: { get, create, remove },
};
