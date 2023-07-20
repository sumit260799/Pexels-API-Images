import React from "react";
import useGlobalContext from "./context";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, ThemeToggle } = useGlobalContext();
  return (
    <div
      onClick={ThemeToggle}
      className="text-[2rem] sm:text-[2.5rem] flex justify-between "
    >
      <p className="uppercase text-[2.5rem] text-[#05a081] font-medium ">
        Pexels images
      </p>

      <button className="text-[1.5rem] sm:text-[1.8rem]">
        {isDarkTheme === "light-theme" ? (
          <BsSunFill className="text-[#e1ab07]" />
        ) : (
          <BsMoonStarsFill className="text-[#05a081]" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
