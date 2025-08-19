import React, { useEffect } from "react";
import { getAllItem, getItemById } from "../api";
import { IItem } from "../../interfaces/item";

export const useGetAllItems = (
  setData: React.Dispatch<React.SetStateAction<IItem[]>>
) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllItem();

        if (data) {
          const { pkl, skripsi } = data;
          const combinedData = [...pkl, ...skripsi];
          setData(combinedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setData]);
};

export const useGetItemById = (
  setData: React.Dispatch<React.SetStateAction<IItem[]> | any>,
  id: string
) => {
  useEffect(() => {
    if (id) {
      getItemById(id).then((res) => setData(res));
    }
  });
};
