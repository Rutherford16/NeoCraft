import Image from "next/image";
import Card from "./components/card";
import Carousel from "./components/carousel";
import dataProduct from "./json/data-product.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e6d4cc]">
      <nav className="navbar sticky-top navbar-expand-sm bg-[#8a5338]">
        <div className="flex flex-row w-full px-2">
          <img className="w-10 h-10" src="/images/logo.png" alt="Logo" />
          <div className="input-group mx-2 rounded-xl text-white border-white border flex-1">
            <span
              className="input-group-text bg-transparent border-none text-white"
              id="search-logo"
            >
              <i className="bi bi-search"></i>
            </span>
            <input
              type="search"
              name="cari"
              id="cari"
              placeholder="Cari"
              className="bg-transparent pr-3 outline-none w-5 flex-1"
              aria-describedby="search-logo"
            />
          </div>
          <button className="w-10 h-10 mx-2">
            <img className="w-fit h-fit" src="/images/keranjang.png" alt="" />
          </button>
          <button
            className="text-white text-4xl outline-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list"></i>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-[#8A5338]">
              <h5
                className="offcanvas-title text-white"
                id="offcanvasNavbarLabel"
              >
                Menu
              </h5>
              <button
                type="button"
                className="btn-close-white btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="flex flex-row justify-evenly">
                    <a
                      className="nav-link bg-[#8A5338] px-3 rounded text-white"
                      href="/daftar"
                    >
                      Daftar
                    </a>
                    <a
                      className="nav-link bg-[#8A5338] px-3 rounded text-white"
                      href="#"
                    >
                      <i class="bi bi-box-arrow-in-right mr-2"></i>
                      Masuk
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Carousel />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mb-24">
        {Array.isArray(dataProduct) &&
          dataProduct.map((data, key) => (
            <Card
              key={key}
              sourceGambarProduk={data.sourceGambarProduct}
              hargaProduk={"Rp. " + data.hargaProduct}
              namaProduk={data.namaProduct}
              id={data.id}
            ></Card>
          ))}
      </div>
      <nav className="w-full p-2 flex flex-row justify-around fixed bottom-2 rounded-full left-0 bg-[#3f2716] text-white text-xs">
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
