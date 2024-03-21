import React from "react";
import Dropdown from "./toolkit/Dropdown";

const Menu = () => {
  return (
    <nav className="">
      <ul className="flex justify-center space-x-3">
        <li className="">
          <Dropdown
            title="Tentang Kami"
            items={[
              { label: "Home", link: "#" },
              { label: "About", link: "#" },
              { label: "Services", link: "#" },
              { label: "Contact", link: "#" },
            ]}
          />
        </li>
        <li className="">
          <Dropdown
            title="Produk & Layanan"
            items={[
              { label: "Home", link: "#" },
              { label: "About", link: "#" },
              { label: "Services", link: "#" },
              { label: "Contact", link: "#" },
            ]}
          />
        </li>
        <li className="flex">
          <a className="inline-flex items-center px-4 py-2" href="#">
            BLOG
          </a>
        </li>
        <li className="flex">
          <a className="inline-flex items-center px-4 py-2" href="#">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
