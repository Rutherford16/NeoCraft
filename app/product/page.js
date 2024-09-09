
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#e6d4cc] border border-black">
      <div className="w-full h-fit p-2 fixed top-0 flex flex-row bg-transparent text-white">
        <button className="w-10 h-10 rounded-full mx-2 bg-[#8a5338]">
          <i class="bi bi-arrow-left"></i>
        </button>
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
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
    </main>
  );
}
