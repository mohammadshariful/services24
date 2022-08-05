// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import SwiperSliderContainer from "./SwiperSliderContainer";

const ServiceSlider = ({ services }) => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={2}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      autoplay={{
        delay: Math.random() * 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <SwiperSliderContainer service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
