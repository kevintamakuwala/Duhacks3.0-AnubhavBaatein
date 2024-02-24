import { url } from ".";
import Axios from "axios";

export const getCategories = async () => {
  const response = await Axios.get(`${url}/category`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const getCategoryById = async (id) => {
  const response = await Axios.get(`${url}/category/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const createCategory = async (category) => {
  const response = await Axios.post(`${url}/category`, category).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const updateCategory = async (category) => {
  const response = await Axios.put(`${url}/category/${category.id}`,category).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};

export const deleteCategory = async (id) => {
  const response = await Axios.delete(`${url}/category/${id}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return response;
};
