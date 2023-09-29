import axios from "../utils/axiosInstance";

export const createCivilRegistrar = async (data) => {
  try {
    let response = await axios.post("/civil-registrar", data);

    console.log(response);
  } catch (error) {
    return Promise.reject(error.message ? error.message : "An error occurred");
  }
};

export const getAllCivilRegistrars = async () => {
  try {
    let response = await axios.get("/civil-registrar");
    console.log(response);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
