import axios from "../utils/axiosInstance";

export const createHospital = async (data) => {
  try {
    let response = await axios.post("/hospitals", data);

    console.log(response);
  } catch (error) {
    return Promise.reject(error.message ? error.message : "An error occurred");
  }
};

export const getAllHospitals = async () => {
  try {
    let response = await axios.get("/hospitals");
    console.log(response);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
