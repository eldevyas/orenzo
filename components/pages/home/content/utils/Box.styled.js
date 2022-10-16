import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Box = styled.div`
  background-color: tomato !important;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    background-color: transparent;
  }

  .slick-slide div {
    outline: none;
    background-color: transparent;
    width: 100%;
    margin: 0 5rem;
    padding: 0 5rem;
  }
`;
export { StyledSlider, Box };