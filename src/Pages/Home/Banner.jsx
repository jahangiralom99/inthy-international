// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide from "../../assets/slide-2023.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-6">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link>
            <img className="w-full" src={slide} alt="slide image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img className="w-full" src={slide} alt="slide image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img className="w-full" src={slide} alt="slide image" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
