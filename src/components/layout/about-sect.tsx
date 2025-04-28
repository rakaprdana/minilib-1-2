import { Paragraph } from "../../interfaces/paragraph";

export const AboutSection = () => {
  const paragraph = Paragraph;
  return (
    <section className="bg-background text-primary text-center w-1/2 my-8 p-8 rounded-2xl shadow-2xl shadow-grayCustom">
      <h1 className="text-4xl font-bold">About this web</h1>
      {paragraph.map((item, index) => (
        <div key={index} className="p-4">
          <p>{item}</p>
        </div>
      ))}
    </section>
  );
};
