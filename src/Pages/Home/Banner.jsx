// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/banar-222.jpg";
import slide2 from "../../assets/banar-333.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
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
            <img className="w-full" src={slide1} alt="slide image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img className="w-full" src={slide2} alt="slide image" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
