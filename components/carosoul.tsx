import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Carasoul() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      sx={{ maxWidth: 1020 }}
      mx='auto'
      height={500}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}>
      <Carousel.Slide>
        <img
          src='https://onlinegyanpoint.in/wp-content/uploads/2022/01/gujarat-vidhwa-sahay-yojana-1024x576.jpg'
          width='950px'
          height='500px'
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`https://i0.wp.com/trandyreporter.in/wp-content/uploads/2021/07/vidhwa-pension-yojana.jpg?fit=1331%2C748&ssl=1`}
          width='950px'
          height='500px'
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src='https://www.mppeb.org/wp-content/uploads/2022/08/Vidhwa-Pension-Yojana-Form.jpeg'
          width='950px'
          height='500px'
        />
      </Carousel.Slide>
    </Carousel>
  );
}
