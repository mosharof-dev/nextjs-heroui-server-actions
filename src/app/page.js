import Image from "next/image";
import HeroPage from "./hero/page";

export default function Home() {
  return (
    <div className="w-full h-50 bg-green-500">
      <h1 className="text-5xl text-center pt-20">
        Home Page comming Soon
      </h1>
       <HeroPage></HeroPage>
    </div>
   
  );
}
