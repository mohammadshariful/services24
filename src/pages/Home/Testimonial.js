// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cotation from "../../assets/images/coatation.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Testimonial = () => {
  const sliderImgContainer = [1, 2, 3, 4];
  return (
    <section className="w-[90%] mx-auto py-7">
      <h2 className="text-center text-primary text-xl lg:text-3xl font-semibold mb-5">
        What our customers say
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderImgContainer.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-2xl p-6 rounded-lg hover:shadow-xl">
              <img src={cotation} alt="" />
              <p className="py-3 font-semibold">
                Speaker/View Details Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit.
              </p>
              <h5 className="text-primary font-semibold">Ritu Kumar</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
