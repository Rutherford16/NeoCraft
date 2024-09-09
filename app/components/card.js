import Image from "next/image";

export default function Card({ sourceGambarProduk, hargaProduk, namaProduk }) {
  return (
    <div className="card bg-transparent">
      <Image src={sourceGambarProduk} className="w-full h-full " width={250} height={250} alt={namaProduk}/>
      <div className="card-body border-0">
        <h3 className="bg-[#8a5338] text-white text-xs rounded p-2">{namaProduk}</h3>
        <h5 className="text-xs text-center">{hargaProduk} </h5>
      </div>
    </div>
  );
}
