import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5">
      <img
        className="w-[100%] h-[300px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="font-semibold  text-2xl">{news.title}</h2>
      <p className="justify-start">{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        <FaArrowLeft size={25}></FaArrowLeft> Go Back
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
