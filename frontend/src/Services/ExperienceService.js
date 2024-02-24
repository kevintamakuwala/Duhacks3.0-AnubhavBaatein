import Axios from "axios";
import { url } from ".";

export const getExperiences = async () => {
  const response = await Axios.get(`${url}/experience`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const getExperienceById = async (id) => {
  const response = await Axios.get(`${url}/experience/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const createExperience = async (experience) => {
  const response = await Axios.post(`${url}/experience`, experience).then((res) => {
      console.log(res.data);
      return res.data;
    }
  );
  return response;
};

export const updateExperience = async (experience) => {
  const response = await Axios.put(`${url}/experience/${experience.id}`,experience).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const deleteExperience = async (id) => {
  const response = await Axios.delete(`${url}/experience/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};
