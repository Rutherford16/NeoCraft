import Image from "next/image";

export default function Card({ sourceGambarProduk, hargaProduk, namaProduk }) {
  return (
    <div className="card bg-transparent cursor-pointer">
      <Image src={sourceGambarProduk} className="w-full h-auto rounded-t" sizes="100vw" width={0} height={0} alt={namaProduk}/>
      <div className="card-body border-0">
        <h3 className="bg-[#8a5338] text-white text-lg text-center rounded p-2">{namaProduk}</h3>
        <h5 className="text-sm text-center">{hargaProduk} </h5>
      </div>
    </div>
  );
}
