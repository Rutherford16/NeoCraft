import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#e6d4cc] border border-black">
      <div className="w-full h-fit p-2 sticky flex flex-row bg-[#8a5338]">
        <img className="w-10 h-10 mx-2" src="/images/logo.png" alt="Logo" />
        <input
          type="search"
          name="cari"
          id="cari"
          className="bg-transparent rounded border-white grow mx-2"
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
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/Gambar slide 1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption bg-black opacity-70 d-block d-md-block">
              <h5>Pusat oleh-oleh Cendera Mata Asli Kalimantan Timur</h5>
              <p>100% Buatan Lokal</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/Gambar slide 2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption bg-black opacity-70 d-block d-md-block">
              <h5>Dari pengrajin untuk anda</h5>
              <p>100% Buatan Lokal</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 mb-24">
        <Card
          sourceGambarProduk="/images/Produk/1.png"
          hargaProduk="Rp. 115.000"
          namaProduk="Keranjang Rotan Motif"
        ></Card>
        <Card
          sourceGambarProduk="/images/Produk/2.png"
          hargaProduk="Rp. 355.000"
          namaProduk="Tas Manik"
        ></Card>
        <Card
          sourceGambarProduk="/images/Produk/3.png"
          hargaProduk="Rp. 250.000"
          namaProduk="Kain Batik Daerah"
        ></Card>
        <Card
          sourceGambarProduk="/images/Produk/4.png"
          hargaProduk="Rp. 325.000"
          namaProduk="Baju Batik Daerah"
        ></Card>
        <Card
          sourceGambarProduk="/images/Produk/5.png"
          hargaProduk="Rp. 2.400.000"
          namaProduk="Gitar Motif Batik"
        ></Card>
        <Card
          sourceGambarProduk="/images/Produk/6.png"
          hargaProduk="Rp. 75.000"
          namaProduk="Kalung Manik"
        ></Card>
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
