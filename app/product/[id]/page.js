import Image from "next/image";
import dataProduct from "../../json/data-product.json";
import Link from "next/link";

export default function Product({ params: { id } }) {
  const data = dataProduct.find((p) => p.id.toString() === id) || {};

  return (
    <main className="relative min-h-screen bg-[#e6d4cc] border border-black">
      <div className="w-full h-fit p-2 fixed top-3 flex flex-row justify-between items-center bg-transparent text-white">
        <div>
          <Link
            href={"/"}
            className="rounded-full py-2 px-2.5 bg-[#8a5338] text-4xl"
          >
            <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div>
          <button className="w-14 h-auto p-3 rounded-full mr-2 bg-[#8a5338]">
            <img className="w-fit h-fit" src="/images/keranjang.png" alt="" />
          </button>
          <button
            className="p-2 rounded-full bg-[#8a5338] text-4xl"
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
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={data.sourceGambarProduct}
          className="w-full h-auto rounded-t"
          sizes="100vw"
          width={0}
          height={0}
          alt="{namaProduk}"
        />
        <div className="flex flex-row justify-between items-center mb-3 px-3 bg-[#8a5338] rounded-full text-white">
          <div>Deskripsi</div>
          <img className="w-10 h-auto" src="/images/keranjang.png" alt="" />
          <div>Review</div>
        </div>
        <div className="flex flex-row justify-between items-center px-3 mb-3">
          <div className="">
            <h3 className="text-lg font-bold">{data.namaProduct}</h3>
            Rp. {data.hargaProduct}
          </div>
          <div className="">
            <button className="py-2 px-4 bg-[#8a5338] rounded-lg text-white">
              Beli Sekarang
            </button>
          </div>
        </div>
        <div className="px-3 mb-3">
          <h3 className="text-lg font-bold">Ukuran</h3>
          <div className="w-full flex flex-row justify-between">
            <button className="py-2 px-3 sm:px-10 border-black border-1 focus:outline-none focus:ring focus:ring-[#8a5338]">
              S
            </button>
            <button className="py-2 px-3 sm:px-10 border-black border-1 focus:outline-none focus:ring focus:ring-[#8a5338]">
              M
            </button>
            <button className="py-2 px-3 sm:px-10 border-black border-1 focus:outline-none focus:ring focus:ring-[#8a5338]">
              L
            </button>
            <button className="py-2 px-3 sm:px-10 border-black border-1 focus:outline-none focus:ring focus:ring-[#8a5338]">
              XL
            </button>
            <button className="py-2 px-3 sm:px-10 border-black border-1 focus:outline-none focus:ring focus:ring-[#8a5338]">
              XXL
            </button>
          </div>
        </div>
        <div className="px-3">
          <h3 className="text-lg font-bold">Deskripsi</h3>
          <p className="text-justify">{data.deskripsiProduct}</p>
        </div>
      </div>
    </main>
  );
}
