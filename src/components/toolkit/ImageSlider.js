import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = (props) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages(props.images);
  }, [props.images]);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    console.log({ currentIndex, imagesLength: images.length, nextIndex });
    setCurrentIndex(nextIndex);
  };

  const previousSlide = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(previousIndex);
  };

  return (
    <div className="relative">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="h-[552px] w-full block mx-auto"
      />
      <div className="absolute inset-y-0 flex justify-between items-center w-full">
        <button
          onClick={previousSlide}
          className="absolute left-0 ml-11 px-4 py-2 h-12 w-12 bg-white rounded-md"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 mr-11 px-4 py-2 h-12 w-12 bg-white rounded-md"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
