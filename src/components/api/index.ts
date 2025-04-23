import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;
export const getAllItem = async () => {
  try {
    const response = await axios.get(`${API}pkl`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
