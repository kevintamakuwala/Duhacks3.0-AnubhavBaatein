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

export const getAlumniWithPagination = async (no) => {
  const response = await Axios.get(`${url}/alumniWithPagination/${no}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const getAlumnis = async () => {
  const response = await Axios.get(`${url}/user/alumni`).then((res) => {
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


export const topTestimonials = async () => {
  const response = await Axios.get(`${url}/top-users`,).then((res) => {
    console.log(res.data);
    return res.data;
  });

  return response;
};

// get analytics
export const getAnalytics = async () => {
  const response = await Axios.get(`${url}/analytics`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};
