import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Menu from "./Menu";
import Button from "./toolkit/Button";
import Breadcrumb from "./toolkit/Breadcrumb";

const Header = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Layanan Desain", path: "/layanan_desain" },
    { label: "Omah Opik 3", path: "/layanan_desain/omah_opik_3" },
  ];

  return (
    <div className="px-16">
      <div className="flex py-10">
        <div className="flex-none">
          <Image
            className="min-h-[42px] w-[192px] gap-2"
            src={logo}
            alt="Logo"
            priority={true}
          />
        </div>
        <div className="grow">
          <Menu />
        </div>
        <div className="flex-none">
          <Button onClick={() => {}}>Daftar</Button>
          <Button type="primary" onClick={() => {}}>
            Masuk
          </Button>
        </div>
      </div>
      <div className="py-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  );
};

export default Header;
