import React from "react";
import { Link } from "react-router-dom";

const HomeScreenCard = (props) => {
  return (
    <div
      className={`${props.classToModify} flex flex-col h-96 lg:w-2/3 mx-auto justify-center gap-4 text-center bg-[#00B4D8] rounded-[32px] text-white`}
    >
      <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold flex justify-center">
        {props.title}
      </h1>
      <p className="flex lg:text-xl justify-center px-4">{props.subtitle}</p>
      <Link
        to={props.linkTo}
        className="flex self-center justify-center bg-[#005869] hover:bg-[#163d45] text-white w-56 rounded-lg py-4 text-lg  transition-all duration-150 hover:shadow-2xl "
      >
        <button>{props.buttonText}</button>
      </Link>
    </div>
  );
};

export default HomeScreenCard;
