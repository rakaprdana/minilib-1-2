import { useState } from "react";
import { IItem } from "../../interfaces/item";

export const FilteredData = () => {
  const [data, setData] = useState<IItem[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const filteredData: IItem[] = data.filter(
    (data) =>
      data.nim.toLowerCase().includes(filterText.toLowerCase()) ||
      data.title.toLowerCase().includes(filterText.toLowerCase()) ||
      data.location.cupboard.toLowerCase().includes(filterText.toLowerCase())
  );
  return {
    filteredData,
    setFilterText,
    setData,
  };
};
