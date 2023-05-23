import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mt-[80px] mb-20">
      <SectionTitle
        heading="Order Online"
        subHeading="---From 11:00am to 10:00pm---"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  h-[430px]"
      >
        <SwiperSlide>
          <img src={slider1} className="h-[380px]" alt="Salads" />
          <p className="text-3xl uppercase text-center -mt-16 text-gray-500">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="h-[380px]" alt="Pizza" />
          <p className="text-3xl uppercase text-center -mt-16 text-gray-500">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="h-[380px]" alt="Sopus" />
          <p className="text-3xl uppercase text-center -mt-16 text-gray-500">
            Sopus
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="h-[380px]" alt="Desserts" />
          <p className="text-3xl uppercase text-center -mt-16 text-gray-500">
            Desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} className="h-[380px]" alt="Salads" />
          <p className="text-3xl uppercase text-center -mt-16 text-gray-500">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
