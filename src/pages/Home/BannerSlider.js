// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const BannerSlider = () => {
  const sliderImgContainer = [
    { picture: img1 },
    { picture: img2 },
    { picture: img3 },
  ];
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderImgContainer.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <img className="w-96 mx-auto" src={imgSrc.picture} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
