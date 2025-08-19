import { InputField } from "../elements/ui/input";
import { FilteredData } from "../function/filteredData";
import { useGetAllItems } from "../hooks/useItem";
import { DetailSection } from "../layout/detail";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

export const LibraryPage = () => {
  const { setData, setFilterText, filteredData } = FilteredData();
  useGetAllItems(setData);

  // fungsi row untuk react-window
  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = filteredData[index];
    return (
      <div style={style}>
        <div className="bg-whiteCustom shadow rounded-xl p-4 mb-4 mr-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <h2 className="text-lg font-semibold">{item.author}</h2>
          <div className="flex space-x-4 text-lg font-semibold">
            <h2>{item.location.cupboard}</h2>
            <h2>{item.location.drawer}</h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-cover bg-center bg-[url('/img/library-bg.jpg')] flex flex-row-reverse justify-between pt-[8rem] pb-[2rem] pr-8 h-screen">
      <section className="w-1/2">
        <InputField
          placeholder={""}
          handleChange={(e) => setFilterText(e.target.value)}
          type={"Search"}
        />
        <DetailSection />
      </section>
      <section className="bg-primary h-full w-3/4 mx-8 p-4 rounded-2xl">
        <List
          height={500}
          itemCount={filteredData.length}
          itemSize={120}
          width={"100%"}
        >
          {Row}
        </List>
      </section>
    </div>
  );
};
