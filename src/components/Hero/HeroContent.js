import Image from "next/image";
import React, { useState } from "react";

const HeroContent = (props) => {
  const [image, setImage] = useState(props.image || "");
  const [title, setTitle] = useState(props.title || "");
  const [size, setSize] = useState(props.size || "");

  return (
    <div className="flex flex-col px-4 pt-4 pb-4 border-[1px] border-light gap-6">
      <Image src={image} alt={title} className="h-[201px] w-[261.33px]" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-xl leading-6">{title}</p>
        <p className="font-normal text-sm leading-[21px]">{size}</p>
      </div>
    </div>
  );
};

export default HeroContent;
