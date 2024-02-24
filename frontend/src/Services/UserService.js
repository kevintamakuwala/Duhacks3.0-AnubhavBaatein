import Axios from "axios";
import { url } from ".";

export const getUsers = async () => {
  const response = await Axios.get(`${url}/user`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const getUserById = async (id) => {
  const response = await Axios.get(`${url}/user/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const createUser = async (user) => {
  const response = await Axios.post(`${url}/user`, user).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const updateUser = async (user) => {
  const response = await Axios.put(`${url}/user/${user.id}`, user).then(
    (res) => {
      console.log(res.data);
      return res.data;
    }
  );
  return response;
};

export const deleteUser = async (id) => {
  const response = await Axios.delete(`${url}/user/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const searchAlumni = async (keyword) => {
  const response = await Axios.get(`${url}/search/alumni`,keyword).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const searchExperience = async (keyword) => {
  const response = await Axios.get(`${url}/search`,keyword).then((res) => {
    console.log(res.data);
    return res.data;
  });

  return response;
};

export const topCategory = async () => {
  const response = await Axios.get(`${url}/top-categories`,).then((res) => {
    console.log(res.data);
    return res.data;
  });

  return response;
};

export const topCompanies = async () => {
  const response = await Axios.get(`${url}/top-companies`,).then((res) => {
    console.log(res.data);
    return res.data;
  });

  return response;
};


