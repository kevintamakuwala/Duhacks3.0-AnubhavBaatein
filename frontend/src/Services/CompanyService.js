import Axios from "axios";
const url=import.meta.env.VITE_REACT_APP_BASE_URL;

export const getCompanies = async () => {
  const response = await Axios.get(`${url}/company`).then((res) => {
    return res.data;
  });
  return response;
};

export const getCompanyById = async (id) => {
  const response = await Axios.get(`${url}/company/${id}`).then((res) => {
    return res.data;
  });
  return response;
};

export const createCompany = async (company) => {
  const response = await Axios.post(`${url}/company`, company).then((res) => {
    return res.data;
  });
  return response;
};

export const updateCompany = async (company) => {
  const response = await Axios.put(`${url}/company/${company.id}`,company).then((res) => {
    return res.data;
  });
  return response;
};

export const deleteCompany = async (id) => {
  const response = await Axios.delete(`${url}/company/${id}`).then((res) => {
    return res.data;
  });
  return response;
};


export const topCompanies = async () => {
  const response = await Axios.get(`${url}/top-companies`,).then((res) => {
    return res.data;
  });

  return response;
};