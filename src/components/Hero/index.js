import React from "react";
import HeroContent from "./HeroContent";
import kamartidur from "@/assets/images/kamartidur.png";
import ruangkeluarga from "@/assets/images/ruangkeluarga.png";
import ruangmakan from "@/assets/images/ruangmakan.png";

const Hero = () => {
  const rooms = [
    {
      image: ruangkeluarga,
      title: "Ruang Keluarga",
      size: "2.0 x 2.9",
    },
    {
      image: kamartidur,
      title: "Kamar Tidur",
      size: "4.0 x 3.4",
    },
    {
      image: ruangmakan,
      title: "Ruang Makan & Dapur",
      size: "3.0 x 2.9",
    },
    {
      image: ruangkeluarga,
      title: "Ruang Kerja",
      size: "2.0 x 2.9",
    },
    {
      image: kamartidur,
      title: "Kamar Tidur",
      size: "4.0 x 3.4",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center gap-6 px-16 mt-6">
      <div className="flex-auto w-[912px] min-h-[681px]">
        <p className="font-semibold text-2xl pb-4">Tampilan Rumah</p>
        <div className="grid grid-cols-3 gap-4">
          {rooms.map((room, index) => (
            <HeroContent key={index} {...room} />
          ))}
        </div>
      </div>
      <div className="flex-auto">Item 2</div>
    </div>
  );
};

export default Hero;
