import axios from "../utils/axiosInstance";

export const createHospital = async (data) => {
  try {
    let response = await axios.post("/hospital", data);

    console.log(response);
  } catch (error) {
    return Promise.reject(error.message ? error.message : "An error occurred");
  }
};

export const getAllHospitals = async () => {
  try {
    let response = await axios.get("/hospital");
    console.log(response);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error.message ? error.message : "An error occurred");
  }
};
