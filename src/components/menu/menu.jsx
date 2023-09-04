import { FaAngleRight } from "react-icons/fa";
import "./menu.css";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
const Menu = ({ open, setOpen }) => {
  const menuItems = [
    { id: 1, name: "Home", path: "/", offset: 200 },
    {
      id: 2,
      name: "Men's Style",
      categories: [
        { id: 1, name: "Lorem 1", path: "/" },
        { id: 2, name: "Lorem 2", path: "/" },
        { id: 3, name: "Lorem 3", path: "/" },
        { id: 4, name: "Lorem 4", path: "/" },
        { id: 5, name: "Lorem 5", path: "/" },
        { id: 6, name: "Lorem 6", path: "/" },
        { id: 7, name: "Lorem 7", path: "/" },
      ],
      offset: 210,
    },
    {
      id: 3,
      name: "Women's Style",
      categories: [
        { id: 1, name: "Lorem 1", path: "/" },
        { id: 2, name: "Lorem 2", path: "/" },
        { id: 3, name: "Lorem 3", path: "/" },
        { id: 4, name: "Lorem 4", path: "/" },
        { id: 5, name: "Lorem 5", path: "/" },
        { id: 6, name: "Lorem 6", path: "/" },
        { id: 7, name: "Lorem 7", path: "/" },
        { id: 8, name: "Lorem 8", path: "/" },
      ],
      offset: 220,
    },
    { id: 4, name: "Style Magazine", path: "/", offset: 230 },
    { id: 5, name: "Contact Us", path: "/", offset: 240 },
    { id: 6, name: "About Us", path: "/", offset: 250 },
  ];
  const ref = useRef(null);
  const handleClickOutside = () => {
    setOpen(false);
    // console.log('clicked outside')
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <>
      <div className="burger-menu-container flex items-center gap-x-4">
        <button
          ref={ref}
          open={open}
          onClick={() => setOpen(!open)}
          className={`pt-3 md:pt-3 lg:pt-0 burger-menu  flex-vr ${
            open ? "active" : null
          }`}
        ></button>
        <span className="hidden md:block text-sm md:text-base -z-10 ms-6">
          Menu
        </span>
      </div>
      <div
        className={`${
          open
            ? "flex fixed z-30 flex-col pb-28 md:pb-14  md:pt-1  gap-y-8  items-center justify-center "
            : " hidden"
        }   font-MontBold top-0 left-0 bg-lightGray shadow-md  bg-filter h-screen w-[300px] md:w-[347px]`}
      >
        {menuItems.map((item) => (
          <div className="flex group relative justify-center items-center w-full flex-col">
            <Link
              path={item.path}
              className="group relative -z-10 flex w-full px-20 justify-center   items-center  "
            >
              <div className="absolute left-[75px] bottom-6 hidden group-hover:flex w-14   font-MontLight ">
                <FaAngleRight className="animation3 w-3 m-0 text-gold opacity-20" />
                <FaAngleRight className="animation2 w-3 m-0 text-gold opacity-50" />
                <FaAngleRight className="animation1 w-3 m-0 text-gold " />
              </div>
              <p className="md:w-60 text-sm md:text-base  pe-6 pb-5 flex justify-center items-animation ">
                {item.name}
              </p>
            </Link>
            <div className="animation4 w-[190px] absolute top-7 hidden mt-2 shadow-2xl me-7 shadow-magenta  group-hover:block h-1 rounded-md bg-magenta opacity-90"></div>
            <div
              className={`${
                item.categories
                  ? "absolute hidden w-60 drop-animation rounded-md h-52 top-10 overflow-x-hidden overflow-y-auto bg-darkbg group-hover:flex flex-col"
                  : ""
              }`}
            >
              {item.categories ? (
                <>
                  {item.categories.map((c) => (
                    <Link
                      path={c.path}
                      className="text-sm flex z-50 p-2 hover:bg-darkmagenta  flex-col w-56 items-center font-MontLight"
                    >
                      {c.name}
                    </Link>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
