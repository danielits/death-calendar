import axios from "axios";

const baseUrl = "https://death-calendar-api.herokuapp.com/api/agenda";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => console.log("error"));
};

const create = (object) => {
  return axios
    .post(baseUrl, object)
    .then((response) => response.data)
    .catch((error) => console.log("error"));
};

const exportedObject = { getAll, create };

export default exportedObject;
