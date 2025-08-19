import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const getAllItem = async () => {
  try {
    const [pklResponse, skripsiResponse] = await Promise.all([
      axios.get(`${API}pkl`),
      axios.get(`${API}skripsi`),
    ]);
    return {
      pkl: pklResponse.data.data,
      skripsi: skripsiResponse.data.data,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getItemById = async (id: string) => {
  try {
    const [pklResponse, skripsiResponse] = await Promise.all([
      axios.get(`${API}pkl/${id}`),
      axios.get(`${API}skripsi/${id}`),
    ]);
    return {
      pkl: pklResponse.data.data,
      skripsi: skripsiResponse.data.data,
    };
  } catch (error) {
    console.error(error);
  }
};
