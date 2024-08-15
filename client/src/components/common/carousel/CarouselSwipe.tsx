import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { CarouselSwipeLayout } from "./styles/CarouselSwipe.styled";
import Image from "next/legacy/image";
import { useState } from "react";

interface CarouselItems {
  name: string;
  path: string;
}

interface Props {
  items: CarouselItems[];
  options?: any;
}

export const CarouselSwipe = (props: Props) => {
  const { items, options } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCarousel = (swiper: SwiperClass) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  return (
    <CarouselSwipeLayout>
      <Swiper
        onSlideChange={(swiper) => onChangeCarousel(swiper)}
        slidesPerView={1}
        loop={items.length > 1}
        className={"carouselContainer"}
      >
        {items.map((item, index: number) => {
          return (
            <SwiperSlide key={`${item}_banner_${index}`}>
              <div className={"carouselBanner"}>
                <Image
                  className={"carouselBannerImage"}
                  src={item.path}
                  alt={item.name}
                  width={1024}
                  height={300}
                  layout={"responsive"}
                  priority={true}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={"carouselCountWrapper"}>
        <span className={"carouselCount"}>
          {currentPage}/{items.length}
        </span>
      </div>
    </CarouselSwipeLayout>
  );
};
