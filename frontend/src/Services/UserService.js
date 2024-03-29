import Axios from "axios";
const url=import.meta.env.VITE_REACT_APP_BASE_URL;

export const getUsers = async () => {
  const response = await Axios.get(`${url}/user`).then((res) => {
    return res.data;
  });
  return response;
};

export const getUserById = async (id) => {
  const response = await Axios.get(`${url}/user/${id}`).then((res) => {
    return res.data;
  });
  return response;
};

export const getAlumniWithPagination = async (no) => {
  const response = await Axios.get(`${url}/alumniWithPagination/${no}`).then((res) => {
    return res.data;
  });
  return response;
};

export const getAlumnis = async () => {
  const response = await Axios.get(`${url}/user/alumni`).then((res) => {
    return res.data;
  });
  return response;
};

export const createUser = async (user) => {
  const response = await Axios.post(`${url}/user`, user).then((res) => {
    return res.data;
  });
  return response;
};

export const updateUser = async (user) => {
  const response = await Axios.put(`${url}/user/${user.id}`, user).then(
    (res) => {
      return res.data;
    }
  );
  return response;
};

export const deleteUser = async (id) => {
  const response = await Axios.delete(`${url}/user/${id}`).then((res) => {
    return res.data;
  });
  return response;
};

export const searchAlumni = async (keyword) => {
  const response = await Axios.get(`${url}/search/alumni`,keyword).then((res) => {
    return res.data;
  });
  return response;
};


export const topTestimonials = async () => {
  const response = await Axios.get(`${url}/top-users`,).then((res) => {
    return res.data;
  });

  return response;
};

// get analytics
export const getAnalytics = async () => {
  const response = await Axios.get(`${url}/analytics`).then((res) => {
    return res.data;
  });
  return response;
};
