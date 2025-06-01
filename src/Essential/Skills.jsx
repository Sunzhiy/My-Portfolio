import { GetContext } from "./Hero";

const Skills = () => {
  const { languages,data,web,tools } = GetContext();
  
  return (
    <>
      <div className="h-2/5">
        <div className="mt-5">
          <p className=" text-teal-500 text-center">Language : </p>
          <div className="border-b-1 w-4/5 text-gray-400 m-auto" />
          <br />
        </div>
        <div className="grid grid-cols-2 h-1/2">
          {languages.map((language) => (
            <div className="flex flex-col bg-blue-200 rounded-3xl items-center  w-1/3  justify-self-center justify-center min-h-24 min-w-24  sm:text-2xl dm:text-3xl hover:scale-110 active:scale-110 shadow-2xl hover:shadow-blue-500 active:shadow-blue-500">
              <div>{language.icon}</div>
              <p>{language.name}</p>
            </div>
          ))}
        </div>
      </div>

      <br />

      <div className="h-2/5">
        <div className="mt-5">
          <p className=" text-yellow-500 text-center">Data : </p>
          <div className="border-b-1 w-4/5 text-gray-400 m-auto" />
          <br />
        </div>
        <div className="grid grid-cols-2  border-amber-500  h-1/2">
          {data.map((Data) => (
            <div className="flex flex-col bg-amber-200 rounded-3xl items-center  w-1/3  justify-self-center justify-center min-h-24 min-w-24  sm:text-2xl dm:text-3xl hover:scale-110 active:scale-110 shadow-2xl hover:shadow-amber-500 active:shadow-amber-500">
              <div>{Data.icon}</div>
              <p>{Data.name}</p>
            </div>
          ))}
        </div>
      </div>

      <br />

      <div className="h-auto">
        <div className="mt-5">
          <p className="text-center text-blue-500">Web : </p>
          <div className="border-b-1 w-4/5 text-gray-400 m-auto" />
          <br />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 h-1/2 space-y-3">
          {web.map((Web) => (
            <div className="flex flex-col bg-emerald-200 rounded-3xl items-center  w-1/3 h-1/2 justify-self-center justify-center min-h-24 min-w-24  sm:text-xl dm:text-2xl hover:scale-110 active:scale-110  shadow-2xl hover:shadow-emerald-500 active:shadow-emerald-500">
              <div>{Web.icon}</div>
              <p>{Web.name}</p>
            </div>
          ))}
        </div>
      </div>

      <br />

      <div className="h-2/5">
        <div className="mt-5">
          <p className=" text-red-500 text-center">Tools : </p>
          <div className="border-b-1 w-4/5 text-gray-400 m-auto" />
          <br />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 h-1/2 gap-3">
          {tools.map((tool) => (
            <div className="flex flex-col bg-rose-200 rounded-3xl items-center  w-1/3 h-full justify-self-center justify-center min-h-24 min-w-24  sm:text-2xl dm:text-3xl hover:scale-110 active:scale-110 shadow-2xl hover:shadow-rose-500 active:shadow-rose-500">
              <div>{tool.icon}</div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
