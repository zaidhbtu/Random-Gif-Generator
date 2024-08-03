import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background items-center overflow-auto">
      <h1 className="bg-white rounded-lg w-10/12 text-center mt-[20px] 
        px-8 py-1 text-3xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[20px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
