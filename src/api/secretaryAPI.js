import axios from "../utils/axiosInstance";

export const CreateSecretary = async (data) => {
  try {
    let response = await axios.post("/secretary", data);

    console.log(response);
  } catch (error) {
    return Promise.reject(error.message ? error.message : "An error occurred");
  }
};

export const getAllSecretaries = async () => {
  try {
    let response = await axios.get("/secretary");
    console.log(response);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
