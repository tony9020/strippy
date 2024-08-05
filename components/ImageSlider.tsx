import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SlideData } from "./ImageData";


interface ImageProps {
    images?: string[];
  }
// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider:React.FC<ImageProps> = () => {

    console.log(SlideData)
  return (
    <Carousel infiniteLoop width='800px'>
      {SlideData.map((slide:any) => {
        return <Image src={slide} height="auto" width="400px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;