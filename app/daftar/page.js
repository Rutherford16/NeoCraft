export default function Daftar() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-[#3F2716] to-[#8A5338]">
      <div className="flex flex-row justify-between p-3">
        <img className="w-10 h-10" src="/images/logo.png" alt="Logo" />
        <button className="text-white text-4xl outline-none">
          <i class="bi bi-list"></i>
        </button>
      </div>
      <div className="flex flex-row p-3 border-white border-1 w-full h-64"></div>
      <div className="w-full mt-3 px-4">
        <h1 className="text-white text-4xl font-bold text-shadow">
          Selamat Datang di Neo Craft
        </h1>
        <div className="flex flex-row justify-between w-32">
          <div className="w-8 h-8 bg-[#3F2716] rounded-full"></div>
          <div className="w-8 h-8 bg-[#8A5338] rounded-full"></div>
          <div className="w-8 h-8 bg-[#F2F0EB] rounded-full"></div>
        </div>
        <p className="text-white text-justify text-xs mt-2">
          Temukan keaslian dan kualitas terbaik dari tangan-tangan terampil
          pengrajin Kalimantan Timur Kami hadir untuk memudahkan Anda dalam
          mencari oleh-oleh autentik, langsung dari sumbernya. Jelajahi berbagai
          produk handmade yang menggambarkan kekayaan budaya dan kreativitas
          lokal, dengan sentuhan modern dan layanan profesional yang memudahkan
          setiap langkah Anda. Mari bersama-sama mendukung karya pengrajin lokal
          dan tunjukkan kepada dunia pesona asli Kalimantan Timur.
        </p>
        <button className="w-full mt-8 py-3 bg-[#F2F0EB] rounded-lg text-[#3F2716] text-xl font-bold">
          Daftar Sekarang
          <i class="pl-2 bi bi-arrow-right"></i>
        </button>
      </div>
    </main>
  );
}
