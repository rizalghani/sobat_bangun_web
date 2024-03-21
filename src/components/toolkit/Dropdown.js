import { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-white text-black px-4 py-2 rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span className="text-base">{title}</span>
        <svg
          className={`w-4 h-4 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 bg-white border rounded shadow-md">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
