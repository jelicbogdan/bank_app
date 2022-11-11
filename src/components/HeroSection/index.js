import React, { useState } from "react";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

import Video from "../../videos/video.mp4";

function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking</HeroH1>
          <HeroP>
            Sign Up for a new account today.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary
              dark
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
