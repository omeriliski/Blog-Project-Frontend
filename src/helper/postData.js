import axios from "axios";

export const postData = async (path, data) => { //*
  const token = localStorage.getItem("token");
  console.log("data Post", data);
  console.log("data Post", token);
  const response = await axios.post(`${path}`, data, {
    headers: {
      Authorization:"token "+token,
    },
  });
  return response?.data;
};