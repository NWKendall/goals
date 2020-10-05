import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "localhost:4444/api",
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
