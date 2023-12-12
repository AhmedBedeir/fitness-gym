/* eslint-disable react/prop-types */
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import Error from "./Error";

function HorizontalScrollBar({
  data,
  bodyPart,
  setBodyPart,
  error = "",
  isBodyPart,
}) {
  if (error.length > 0) {
    return <Error />;
  }
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        style={{
          "--swiper-pagination-color": "var(--light-orange)",
        }}
      >
        {data.slice(0, 12).map((itm) => (
          <SwiperSlide key={itm.id || itm}>
            {isBodyPart ? (
              <BodyPart
                title={itm}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={itm} width="370px" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HorizontalScrollBar;
