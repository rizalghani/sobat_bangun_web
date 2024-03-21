import React, { useState } from "react";
import ImageSlider from "./toolkit/ImageSlider";
import apik1 from "@/assets/images/apik1.png";
import apik2 from "@/assets/images/apik2.png";
import apik3 from "@/assets/images/apik3.png";
import apik4 from "@/assets/images/apik4.png";

const Banner = () => {
  const images = [apik1, apik2, apik3, apik4];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Banner;
