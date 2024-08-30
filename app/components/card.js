export default function Card({ sourceGambarProduk, hargaProduk, namaProduk }) {
  return (
    <div class="card bg-transparent">
      <img src={sourceGambarProduk} class="gambarProduk " />
      <div class="card-body border-0">
        <h3 class="bg-[#8a5338] text-white text-xs rounded p-2">{namaProduk}</h3>
        <h5 class="text-xs text-center">{hargaProduk} </h5>
      </div>
    </div>
  );
}
