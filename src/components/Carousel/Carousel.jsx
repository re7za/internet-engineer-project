import "tw-elements";

const Carousel = () => {
  return (
    <div
      id="simple-carousel"
      className="slide carousel relative"
      data-bs-ride="carousel"
    >
      <div
        dir="ltr"
        className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0"
      >
        <button
          type="button"
          data-bs-target="#simple-carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#simple-carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#simple-carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://picsum.photos/1280/563"
            className="block w-full"
            alt="تصویر اول"
          />
          <div className="carousel-caption absolute hidden rounded-lg bg-slate-900/50 text-center md:block">
            <h5 className="text-xl">تایتل تصویر اول</h5>
            <p>این تصویر اولین تصویری است که نشان میدهیم</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://picsum.photos/1280/564"
            className="block w-full"
            alt="تصویر دوم"
          />
          <div className="carousel-caption absolute hidden rounded-lg bg-slate-900/50 text-center md:block">
            <h5 className="text-xl">تایتل تصویر دوم</h5>
            <p>این تصویر دومین تصویری است که نشان میدهیم</p>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://picsum.photos/1280/565"
            className="block w-full"
            alt="تصویر سوم"
          />
          <div className="carousel-caption absolute hidden rounded-lg bg-slate-900/50 text-center md:block">
            <h5 className="text-xl">تایتل تصویر سوم</h5>
            <p>این تصویر سومین تصویری است که نشان میدهیم</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#simple-carousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#simple-carousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
