import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, id }) => {
  let gif = data;
  return (
    <Link
      to={`gif/${id}`}
      className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3"
      onClick={() => console.log(id)}
    >
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-40 p-2"
          style={{
            backgroundImage: `url(${gif.images.original.url})`,
          }}
        ></div>
        <div className="p-2">
          <p className="text-gray-700">{gif.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
