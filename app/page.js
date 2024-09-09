import Image from "next/image";
import Card from "./components/card";
import Carousel from "./components/carousel";
import dataProduct from "./json/data-product.json";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#e6d4cc] border border-black">
      <div className="w-full h-fit p-2 sticky flex flex-row bg-[#8a5338]">
        <img className="w-10 h-10 mx-2" src="/images/logo.png" alt="Logo" />
        <input
          type="search"
          name="cari"
          id="cari"
          className="bg-transparent rounded border-white border grow mx-2"
        />
        <button className="w-10 h-10 mx-2">
          <img className="w-fit h-fit" src="/images/keranjang.png" alt="" />
        </button>
        <button
          className="bg-transparent text-white text-4xl"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse" id="collapseExample">
          <div className="fixed top-10 right-0">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <Carousel />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-24">
        {Array.isArray(dataProduct) &&
          dataProduct.map((data, key) => (
            <Card
              key={key}
              sourceGambarProduk={data.sourceGambarProduct}
              hargaProduk={"Rp. " + data.hargaProduct}
              namaProduk={data.namaProduct}
              id = {data.id}
            ></Card>
          ))}
      </div>
      <nav className="w-full p-2 flex flex-row justify-around fixed bottom-5 rounded-full left-0 bg-[#3f2716] text-white">
        <a href="#" className="grid justify-items-center hover:opacity-50">
          <img src="/images/Nav/buat kamu.png" className="w-8 h-auto" />
          Buat Kamu
        </a>
        <a href="#" className="grid justify-items-center hover:opacity-50">
          <img src="/images/Nav/whistlist.png" className="w-8 h-auto" />
          Wishlist
        </a>
        <a href="#" className="grid justify-items-center hover:opacity-50">
          <img src="/images/Nav/home.png" className="w-7 h-auto" />
          Home
        </a>
        <a href="#" className="grid justify-items-center hover:opacity-50">
          <img src="/images/Nav/notifikasi.png" className="w-7 h-auto" />
          Notifikasi
        </a>
        <a href="#" className="grid justify-items-center hover:opacity-50">
          <img src="/images/Nav/saya.png" className="w-5 h-auto" />
          Saya
        </a>
      </nav>
    </main>
  );
}
