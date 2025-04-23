import { useEffect, useState } from "react";
import { getAllItem } from "../api";
import { IItem } from "../../interfaces/item";

export const LibraryPage = () => {
  const [data, setData] = useState<IItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await getAllItem());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="space-y-4 p-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow rounded-xl p-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <h2 className="text-lg font-semibold">{item.author}</h2>
          <h2 className="text-lg font-semibold">{item.location.cupboard}</h2>
        </div>
      ))}
    </div>
  );
};
