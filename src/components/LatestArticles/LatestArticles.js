import React, { useEffect } from "react";
// Import icons
import { FaPen, FaCalendar } from "react-icons/fa6";

// Import Aos
import AOS from "aos";

// Import styles
import "../LatestArticles/LatestArticles.css";

const data = [
  {
    id: 1,
    url: "/assets/images/news1.webp",
    title: "Snoop Dogg drops first collection with Skechers",
    author: "By Danielle Wightman-Stone",
    date: "Aug 2, 2023",
    href: "/",
  },
  {
    id: 2,
    url: "/assets/images/news2.webp",
    title: "Neurodiverse consumers feel snubbed by the fashion industry",
    author: "By Danielle Wightman-Stone",
    date: "1 Day Ago",
    href: "/",
  },

  {
    id: 3,
    url: "/assets/images/news3.webp",
    title: "Colourful Rebel's Second Drop of FW23 Collection: NatureVerse",
    author: "By Amanda Peterson",
    date: "Jul 26, 2023",
    href: "/",
  },
  {
    id: 4,
    url: "/assets/images/news4.webp",
    title: "Kenzo chooses Shanghai for first ever show in China",
    author: "By Hector Mendez",
    date: "Aug 7, 2023",
    href: "/",
  },

  {
    id: 5,
    url: "/assets/images/news5.webp",
    title: "CFDA releases preliminary NYFW schedule for September",
    author: "By Kevin Williams",
    date: "Jul 26, 2023",
    href: "/",
  },
];

const LatestArticles = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="latest-articles  w-full py-[5vw] g-[1vw] bg-dark-bg flex-vr">
      <h1
        className="title relative  mt-[4vw] mb-[3vw] text-[2vw] text-center flex-vr"
        data-aos="fade"
      >
        Latest Articles
      </h1>

      <div
        className="latest-articles-container grid grid-cols-6 w-full h-[50vw] mt-[5vw]"
        data-aos="fade"
      >
        {data.map((item) => (
          <a
            href="/"
            className="latest-articles-card  relative z-[3] overflow-hidden"
            key={item.id}
          >
            <div
              className="latest-articles-card-banner w-full h-full bg-cover bg-center "
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            ></div>
            <div className="latest-articles-card-details absolute w-full h-[90%] z-[4] top-[50%] p-[1vw] text-white flex-vr">
              <h2 className="w-full p-[1vw] text-[#c0c0c0] max-[500px]:text-[1.4vw]">
                {item.title}
              </h2>
              <div
                className="latest-articles-card-sub-details my-5 p-[1vw] w-full gap-[3vw] font-normal text-[.9vw] flex flex-row items-center 
               justify-start "
              >
                <span className="gap-[.35vw] flex-hz">
                  <FaPen />
                  {item.author}
                </span>
                <span className=" gap-[.35vw] flex-hz">
                  <FaCalendar />
                  {item.date}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <button className="all-items-btn  relative mb-[20vw] mt-[10vw] px-[3vw] py-[0.75vw] text-[1.5vw] font-normal text-light-font rounded-lg border-[1px] border-magneta  z-[2] overflow-hidden">
        View All Items
      </button>
    </section>
  );
};

export default LatestArticles;
