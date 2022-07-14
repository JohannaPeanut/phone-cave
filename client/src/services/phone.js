import api from "./api";

export const listPhones = () => {
  return api.get("/phones").then((response) => response.data);
};

export const singlePhone = (id) => {
  return api.get(`/phones/${id}`).then((response) => response.data);
};
