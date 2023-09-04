import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Texture from "../../assets/images/landing-bg-texture.webp";
import MagicBtn from "./MagicBtn";
import DottedPattern from "./DottedPattern";
import { FaPlus } from "react-icons/fa6";
import arrowVector from "../../assets/images/arrow-vector.png";

// Import swiper styles
import "swiper/css/bundle";
import "../LandingPage/Landing.css";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const sliderImage = [
  {
    id: 1,
    type: "Women's",
    alt: "woman-style",
    url: "../../assets/images/woman-style.webp",
  },
  {
    id: 2,
    type: "Men's",
    alt: "male-style",
    url: "../../assets/images/male-style.webp",
  },
  {
    id: 3,
    type: "Kid's",
    alt: "kid-style",
    url: "../../assets/images/kid-style.webp",
  },
];
const Landing = () => {
  return (
    <section className="landing-page w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        centeredSlides={true}
        initialSlide={0}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        className="bg-Swiper relative w-full h-full"
      >
        {sliderImage.map((slideItem) => (
          <SwiperSlide key={slideItem.id}>
            <div className="front-sliders absolute inset-0 m-auto z-[10] bg-transparent h-screen w-full flex-vr">
              <div className="container w-full gap-[3vw] flex-hz ">
                {/* Left side */}
                <div className="left-side-text-slider relative w-[30vw] h-[25vw] z-[10] flex-vr gap-[5vw] justify-start!important">
                  <div className="left-side-title-container relative w-[56%] h-[20%] flex-vr">
                    <div className="left-side-title-frame relative h-full w-[105%]">
                      <div className="left-side-title-frame-inner absolute h-full w-[102%] border-[0.2vw] border-solid border-silver border-w-1"></div>
                    </div>
                    {/* main title <h1/> */}
                    <div className="left-side-title-frame-text absolute h-[90%] w-[110%] bg-gold flex-vr">
                      <h1 className=" text-dark-font text-[2vw]">
                        Find Your Style
                      </h1>
                    </div>
                  </div>
                  {/* Text slider */}
                  <div className="text-slider bottom-0 w-[120%] h-[22%]">
                    <h1 className="text-[4vw] text-center">
                      <span className="text-gold">{slideItem.type}</span> Styles
                    </h1>
                  </div>
                  <div>
                    {/* magic button */}
                    <MagicBtn />
                  </div>
                </div>

                {/* Right side */}
                {/* photoSlider */}
                <div className="right-side-photo-slider relative translate-x-[2vw] w-[50vw] h-[40vw] flex-vr ">
                  <div className="photo-slider-frame relative w-[42%] h-[70%] translate-y-[4vw] rounded-[2vw] flex-vr bg-[#ff007480] sha">
                    <figure className="absolute w-[115%] bottom-0  z-[5]">
                      <img
                        src={slideItem.url}
                        alt={slideItem.alt + " picture"}
                        title={slideItem.alt}
                      />
                    </figure>
                    <DottedPattern />
                    <DottedPattern />
                    <div className="plus-pattern absolute top-[-1.5vw] right-[-3vw] text-[#ff007480] ">
                      <span className="absolute  bottom-[25%] left-[50%] max-[992px]:left-[90%] ">
                        <FaPlus />
                      </span>
                      <span className="absolute top-[6%] left-[21%]  max-[992px]:left-[21%] max-[992px]:top-[37%] ">
                        <FaPlus />
                      </span>
                      <span className=" absolute bottom-[10%] left-[9%] max-[992px]:left-[33%] max-[992px]:bottom-[37%] ">
                        <FaPlus />
                      </span>
                    </div>
                    <div className="plus-pattern w-[2.5vw] h-[2.5vw] absolute bottom-[-1.5vw] left-[-6vw] text-[#ff007480]">
                      <span className="absolute bottom-[25%] left-[50%]">
                        <FaPlus />
                      </span>
                      <span className="absolute top-[6%] left-[21%] ">
                        <FaPlus />
                      </span>
                      <span className=" absolute bottom-[10%] left-[9%] ">
                        <FaPlus />
                      </span>
                    </div>
                  </div>
                  <h2 className="text-box-1 absolute w-[10vw] z-[4] left-[5vw] top-[27%] text-[1.4vw] ">
                    We Have <br />
                    Lost Of
                    <br />
                    <span className="text-magneta">
                      Offers
                      <br />
                      For You
                    </span>
                  </h2>
                  <h2 className="text-box-2 absolute w-[10vw] z-[4] right-0 bottom-[30%] text-[1.4vw]">
                    Worried <br />
                    About
                    <br />
                    <span className="text-magneta">
                      What to
                      <br />
                      Wear?
                    </span>
                  </h2>
                  <img
                    src={arrowVector}
                    alt="arrow-vector"
                    className="arrow-vector w-[33vw] h-[20vw] absolute bottom-[4%] bg-transparent"
                  />
                </div>
                <img
                  className="absolute  w-full h-full z-[1] opacity-10 inset-0"
                  src={Texture}
                  alt="texture"
                ></img>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Landing;
