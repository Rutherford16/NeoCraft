import Image from "next/image";
import Card from "./components/card";
import Carousel from "./components/carousel";
import dataProduct from "./json/data-product.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-[#3F2716] to-[#8A5338]">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="p-2 bg-[#F2F0EB] rounded-2xl">
          <img className="w-16 h-auto" src="/images/logo.png" alt="Logo" />
        </div>
      </div>
    </main>
  );
}
