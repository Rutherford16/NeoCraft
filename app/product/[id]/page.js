import Image from "next/image";
import dataProduct from "../../json/data-product.json";

export default function Product({ params: { id } }) {
  const data = dataProduct.find((p) => p.id.toString() === id) || {};

  return (
    <main className="relative min-h-screen bg-[#e6d4cc] border border-black">
      <div className="w-full h-fit p-2 fixed top-0 flex flex-row justify-between bg-transparent text-white">
        <div>
          <button className="w-10 h-10 rounded-full mx-2 bg-[#8a5338]">
            <i className="bi bi-arrow-left"></i>
          </button>
        </div>
        <div>
          <button className="w-10 h-10 p-2 rounded-full mx-2 bg-[#8a5338]">
            <img className="w-fit h-fit" src="/images/keranjang.png" alt="" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-[#8a5338] text-4xl"
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
      </div>
    </main>
  );
}
