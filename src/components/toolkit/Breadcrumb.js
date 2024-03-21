import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index < items.length - 1 ? (
              <Link
                href={item.path}
                className="text-primary text-sm font-semibold hover:text-gray-700"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-secondary text-sm font-semibold">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <FaChevronRight className="text-secondary" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
