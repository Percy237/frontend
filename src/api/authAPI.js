import axios from "../utils/axiosInstance";

export const login = async (data) => {
  try {
    let response = await axios.post("/auth/login", data);

    console.log(response.data);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message ? error.message : "An error occurred");
  }
};

export const logout = async () => {
  try {
    let response = await axios.get("/auth/logout");
    console.log(response);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error.message ? error.message : "An error occurred");
  }
};
