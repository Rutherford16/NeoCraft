export default function Carousel({}) {
  return (
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
