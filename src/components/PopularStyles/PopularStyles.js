import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import vector from "../../assets/images/frame-vector3.webp";
import frame from "../../assets/images/text-frame.svg";

// Import Aos
import AOS from "aos";


// Import styles
import "swiper/css/bundle";
import "../PopularStyles/PopularStyles.css";

// data array
const data = [
  {
    id: 1,
    url: "/assets/images/card-photo1.webp",
    title: "Summer Styles (Men)",
    href: "/",
  },
  {
    id: 2,
    url: "/assets/images/card-photo7.webp",
    title: "Sporty Styles (Women)",
    href: "/",
  },

  {
    id: 3,
    url: "/assets/images/card-photo3.webp",
    title: "Official Styles (Woman)",
    href: "/",
  },
  {
    id: 4,
    url: "/assets/images/card-photo8.webp",
    title: "Wedding Styles",
    href: "/",
  },

  {
    id: 5,
    url: "/assets/images/card-photo4.webp",
    title: "Summer Styles (Women)",
    href: "/",
  },
  {
    id: 6,
    url: "/assets/images/card-photo2.webp",
    title: "Official Styles (Men)",
    href: "/",
  },
  {
    id: 7,
    url: "/assets/images/card-photo5.webp",
    title: "Winter styles (Women)",
    href: "/",
  },
  {
    id: 8,
    url: "/assets/images/card-photo6.webp",
    title: "Sporty Styles (Men)",
    href: "/",
  },
  {
    id: 9,
    url: "/assets/images/card-photo9.webp",
    title: "Winter styles (Men)",
    href: "/",
  },
];

const PopularStyles = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="popular-styles w-full min-h-[46vw] p-[1vw] g-[2vw] flex-vr">
      <h1 className="title relative mt-[4vw] mb-[3vw] text-[2vw] text-center flex-vr" data-aos="fade">
        Popular Styles
      </h1>

      <div className="container h-[34vw] m-auto" data-aos="fade-up">
        <Swiper
          slidesPerView={3}
          initialSlide={4}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          // responsive breakpoints
          breakpoints={{
            320: {
              slidesPerView:1,
              spaceBetween:20,
            },
            768: {
              slidesPerView:3,
              spaceBetween:10,

            },
            1024: {
              slidesPerView:3,
            },
          }}
          // responsive breakpoints end


          modules={[Pagination, Navigation]}
          className="styles-swiper"
        >
          {data.map((item) => (
            <SwiperSlide className="popular-card-container" key={item.id}>
              <div className="popular-card flex-vr ">
                <a
                className=" flex-vr">
                  <div className="popular-card-frame  flex-vr">
                    <img
                      src={vector}
                      alt={item.title+" picture "}
                      title={item.title}
                      loading="lazy"
                    ></img>
                    <div className="popular-card-photo flex-vr">
                      <img src={item.url} alt="style"></img>
                    </div>
                  </div>

                  <div className="frame-box relative w-full flex-vr">
                    <img className="w-full" src={frame} alt="frame" loading="lazy" ></img>
                    <h3 className="absolute text-dark-bg text-center py-[1vw] px-[2vw]">{item.title}</h3>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularStyles;
