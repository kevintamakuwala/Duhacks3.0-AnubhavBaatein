import Axios from "axios";
const url=import.meta.env.VITE_REACT_APP_BASE_URL;

export const getJobs = async () => {
    const response = await Axios.get(`${url}/job`).then((res) => {
        return res.data;
    });
    return response;
}
    
export const getJobById = async (id) => {
    const response = await Axios.get(`${url}/job/${id}`).then((res) => {
        return res.data;
    });
    return response;
}

export const getJobsByTitle = async (title) => {
    const response = await Axios.get(`${url}/job/title/${title}`).then((res) => {
        return res.data;
    });
    return response;
}

export const createJob = async (job) => {
    const response = await Axios.post(`${url}/job`, job).then((res) => {
        return res.data;
    });
    return response;
}

export const updateJob = async (job) => {
    const response = await Axios.put(`${url}/job/${job.id}`, job).then((res) => {
        return res.data;
    });
    return response;
}

export const deleteJob = async (id) => {
    const response = await Axios.delete(`${url}/job/${id}`).then((res) => {
        return res.data;
    });
    return response;
}