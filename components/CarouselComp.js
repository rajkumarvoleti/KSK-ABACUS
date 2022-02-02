import { Box } from "@material-ui/core";
import Image from "next/image";
import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
import image6 from "../images/image6.jpeg";
import image7 from "../images/image7.jpeg";
import image8 from "../images/image8.jpeg";
import image9 from "../images/image9.jpeg";

const urls = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
  image5.src,
  // image6.src,
  image7.src,
  image8.src,
  image9.src,
];

export default function CarouselComp() {
  const carousel = useRef(null);

  const handleEnd = ({ index }) => {
    console.log(index);
    if (index == 7) {
      setTimeout(() => {
        carousel.current.goTo(0);
      }, 1000);
    }
  };

  return (
    <Box className="center" sx={{ width: "100vw" }}>
      <Carousel
        style={{ width: "90vw", maxWidth: "1000px", margin: "100px 0" }}
        ref={carousel}
        showArrows={false}
        enableAutoPlay={true}
        onNextEnd={handleEnd}
        autoPlaySpeed={3000}
        enableMouseSwipe={false}
      >
        {urls.map((url) => (
          <Image
            src={url}
            alt="abacus"
            width="800px"
            height="450px"
            key={url}
          />
        ))}
      </Carousel>
    </Box>
  );
}
