import React, { useEffect, useState } from "react";
import "./preloader.css";
import { Link } from "react-router-dom";
const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      //console.log("its Unappear after 3sc");
      setShowPreloader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`h-screen fixed ${
        showPreloader ? "flex " : "hidden"
      } justify-center z-50 items-center w-full bg-lightGray bg-filter `}
    >
      <div className="w-[300px] md:w-[430px] h-[300px] md:h-96 bg-darkbg  md:p-3 rounded-md preloader flex flex-col gap-y-4 font-MontSemiBold justify-center items-center">
        <Link
          path="/"
          className="flex w-full pt-6 md:pt-0 ps-5 mb-14 h-[67.81px] justify-center items-center relative "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 1384 611"
            id="logo"
            className="svg-pre"
          >
            <path
              className="animation-svg-preloader"
              d="M3780 5485c-208-46-532-197-860-400-356-221-624-508-694-744-49-166 8-351 147-477 284-256 872-391 1895-435 241-10 297-9 281 5-2 2-101 13-219 26-722 74-1259 194-1585 355-391 193-445 404-184 712 60 71 194 191 309 275 223 164 672 398 886 463l46 14-23-26c-38-41-305-238-559-412-356-244-482-356-542-480-64-132-10-245 141-291 246-77 833-39 1931 125 409 61 574 85 576 82 1-1 16-148 33-327s36-365 42-415c16-134 81-528 124-745 37-185 52-264 89-475 39-216 43-237 63-280 37-82 102-135 166-135 35 0 36 1 31 32-16 125-46 330-53 368-5 25-14 72-20 105-37 208-101 526-146 725-19 85-42 187-50 225-8 39-22 99-30 135-31 134-105 487-130 625-9 50-20 108-25 130-5 21-8 41-6 42 4 5 203 30 391 50 125 13 253 18 485 18 295 0 321-2 405-23 115-29 190-67 229-115 28-35 31-46 31-105 0-37-3-85-7-107-6-34-5-31 12 15 33 96 22 184-30 244-35 39-141 97-220 120-188 54-417 70-917 63l-402-5-5 26c-9 47-34 244-41 322-20 223-9 459 24 543 6 16 9 33 5 38-33 54-89-157-100-376-5-98-1-179 15-332 12-112 21-209 21-217 0-10-21-16-77-20-393-31-731-63-1008-96-616-74-729-83-1015-84-264-1-350 8-350 36 0 18 129 138 235 219 55 42 201 145 325 229 309 210 401 279 503 379 140 136 183 221 151 300-23 58-69 83-158 87-39 2-100-3-136-11zM7744 5458c-41-20-57-76-50-180 3-51 8-129 11-173 9-140 15-228 21-305 7-103 73-779 79-809 2-14 9-71 15-126 5-55 14-127 20-160 8-56 22-155 35-250 23-179 104-607 139-735 8-30 22-84 31-120 44-184 124-372 208-492 97-141 219-176 362-108 37 18 64 34 62 37-3 2-25-6-49-18-63-32-162-37-214-11-216 110-343 607-409 1597-8 121-17 276-20 345s-7 175-10 235c-3 61-7 178-10 260-12 383-16 464-20 520-5 68-18 312-18 335 1 37-19 105-35 117-25 20-95 53-112 52-8 0-25-5-36-11zM10651 5248c-63-133-91-302-92-560v-168h-142c-132 0-409-10-415-15-1-1 1-40 5-86l8-84 55 3c30 1 93 7 140 12 207 22 341 32 347 26 3-3 10-59 15-123 9-135 35-405 48-508 28-224 41-327 50-385 18-128 51-337 80-520 5-30 14-84 19-120 6-36 15-87 21-115 5-27 19-102 30-165s25-133 30-155 21-101 35-175c26-138 41-173 87-199 35-20 72-7 118 40 51 53 51 61-1 309-64 305-66 316-105 480-19 85-41 182-49 215-7 33-17 80-24 105-24 100-82 366-101 470-6 30-17 84-25 120-22 102-51 260-79 440-15 91-31 187-36 213-18 88-21 84 83 92 111 9 167 12 272 15 44 1 99 4 123 7l42 5v43c0 36-3 44-23 49-13 3-132 6-264 7-133 1-247 5-254 10-11 7-14 62-14 276 0 250 2 273 23 348 13 44 30 90 38 103 16 24 13 52-5 52-6 0-23-28-40-62zM8641 4002c-67-36-91-132-50-199 53-85 187-85 239 0 24 38 26 106 5 147-33 64-126 89-194 52z"
              transform="matrix(.1 0 0 -.1 0 611)"
            ></path>
            <path
              className="animation-svg-preloader"
              d="M2820 3932c0-13 27-17 300-37 822-62 1430-209 1696-409 107-80 153-160 154-264 1-234-276-533-767-830-214-129-444-242-563-278l-45-14 26 23c15 12 55 47 90 78 89 77 205 166 494 379 295 217 431 345 485 453 57 117 42 206-46 266-184 126-751 86-2019-144-838-152-1134-194-1495-214-349-20-593 23-673 119-40 47-52 102-38 179 13 72 10 90-7 34-51-180 8-283 198-349 255-89 817-90 1645-3 232 24 636 74 765 95 236 37 582 87 770 110 247 31 593 43 676 25 51-12 53-14 42-34-34-64-230-233-463-402-467-335-624-474-694-612-30-61-29-132 4-172 36-41 82-54 179-49 146 8 374 100 665 267 558 320 888 651 957 960 61 274-129 507-526 643-250 85-589 141-1015 167-272 17-795 26-795 13zM8666 3578c-25-22-25-25-17-88 6-36 13-96 16-135 4-38 13-99 20-135 8-36 16-85 20-110 21-142 89-426 141-590 72-222 165-396 256-475 46-40 141-89 160-83 7 3-8 14-33 26-117 57-206 209-263 452-20 82-22 99-41 240-19 149-22 178-30 280-3 47-8 110-10 140-3 30-7 100-11 155-3 55-7 111-9 125s-6 54-10 90c-9 93-11 97-62 114-64 22-97 20-127-6zM6033 3552c-50-10-95-20-99-25-4-4 4-20 18-35 23-25 158-215 258-364 96-143 367-539 400-586 111-155 104-142 90-180-25-70-310-650-433-884-178-334-388-661-512-796-132-142-237-208-326-205-59 2-99 22-168 87-40 38-49 43-33 20 31-44 99-104 138-120 45-19 133-18 180 2 130 54 258 171 464 425 125 154 467 680 571 876 52 100 122 229 169 313 40 72 294 533 400 725 18 33 80 151 136 261 57 111 137 264 179 339 41 76 75 142 75 146 0 5-17 9-37 9-21 0-74 3-118 6l-80 6-31-59c-86-160-121-227-237-458-69-137-146-294-171-347-25-54-47-98-50-98-4 0-39 52-117 175-49 78-348 526-397 595-17 25-53 77-80 115-56 81-55 81-189 57zM11755 3443c-51-27-82-62-115-134-22-48-37-69-50-69-30 0-78-65-99-135-66-214-36-628 64-874 60-146 177-283 271-315 228-77 390 115 426 507 39 416-132 921-344 1017-52 24-112 25-153 3zm143-232c102-52 196-212 238-405 25-113 30-318 10-407-28-126-89-209-175-238-50-16-80-14-136 13-169 79-285 370-285 718 0 127 4 142 31 125 24-15 49-1 64 33 40 95 72 145 105 162 45 23 101 23 148-1zM9910 3373c-63-22-182-145-238-245-86-151-168-385-198-563-23-130-15-349 14-426 21-54 65-105 109-128 77-40 211 49 319 210 38 57 114 209 151 299 10 24 11 22 17-20 34-206 109-366 181-384 50-13 118 46 131 113 5 25 1 35-27 61-19 17-44 40-56 52-66 62-100 253-109 611-5 163-12 276-18 290-8 16-23 24-54 28-23 3-43 7-45 10-2 2-14 21-26 42-22 36-66 68-93 66-7 0-33-8-58-16zm65-189c57-22 84-227 50-380-24-108-58-200-121-327-163-329-294-360-294-71 0 109 22 221 77 384 93 279 201 427 288 394z"
              transform="matrix(.1 0 0 -.1 0 611)"
            ></path>
          </svg>
        </Link>
        <p className="text-gold animate-pulse text-lg">please Wait</p>
        <div className="relative w-full">
          <div className=" flex w-full left-[117px] md:left-[170px] mt-2 gap-x-2 absolute">
            <div className="bg-gold w-[10px] h-[10px] rounded-full circle-animation1"></div>
            <div className="bg-gold w-[10px] h-[10px] rounded-full circle-animation2"></div>
            <div className="bg-gold w-[10px] h-[10px] rounded-full circle-animation3"></div>
            <div className="bg-gold w-[10px] h-[10px] rounded-full circle-animation4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
