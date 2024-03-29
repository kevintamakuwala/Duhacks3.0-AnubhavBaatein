import Axios from "axios";
const url=import.meta.env.VITE_REACT_APP_BASE_URL;

export const getExperiences = async () => {
  const response = await Axios.get(`${url}/experience`).then((res) => {
    return res.data;
  });
  return response;
};

export const getExperiencesWithPagination = async (no) => {
  const response = await Axios.get(`${url}/experienceWithPagination/${no}`).then((res) => {
    return res.data;
  });
  return response;
};

export const getExperienceById = async (id) => {
  const response = await Axios.get(`${url}/experience/${id}`).then((res) => {
    return res.data;
  });
  return response;
};

export const createExperience = async (experience) => {
  const response = await Axios.post(`${url}/experience`, experience).then((res) => {
      return res.data;
    }
  );
  return response;
};

export const updateExperience = async (experience) => {
  const response = await Axios.put(`${url}/experience/${experience.id}`,experience).then((res) => {
    return res.data;
  });
  return response;
};

export const deleteExperience = async (id) => {
  const response = await Axios.delete(`${url}/experience/${id}`).then((res) => {
    return res.data;
  });
  return response;
};

export const searchExperience = async (keyword) => {
  const response = await Axios.get(`${url}/search`,keyword).then((res) => {
    return res.data;
  });

  return response;
};