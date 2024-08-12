import { BannerLayout } from "./styles/Banner.styled";
import { ReactElement } from "react";
import { CarouselSwipe } from "@components/common/carousel/CarouselSwipe";

export const Banner = (): ReactElement => {
  const items = [
    {
      name: "banner-thumbnail",
      path: "/images/sample/banner-sample1.png",
    },
  ];

  return (
    <BannerLayout>
      <div>
        <CarouselSwipe items={items} />
        {/*<Image*/}
        {/*  src={"/images/sample/banner-sample1.png"}*/}
        {/*  alt={"banner"}*/}
        {/*  width={1024}*/}
        {/*  height={300}*/}
        {/*  layout={"responsive"}*/}
        {/*  priority={true}*/}
        {/*  style={{*/}
        {/*    width: "100%",*/}
        {/*    height: "auto",*/}
        {/*    maxWidth: "100%",*/}
        {/*  }}*/}
        {/*/>*/}
      </div>
    </BannerLayout>
  );
};
