import "../App.css";
import React from "react";
import JSONPretty from "react-json-pretty";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function App() {
  const {
    login: { info },
  } = useSelector((state) => state);

  const list = info.data.data || [];
  const { id } = useParams();
  const gif = list[id];

  console.log(gif, "DDDDDDDDDDD");

  return (
    <>
      <div className="bg-gray-900 font-sans leading-normal tracking-normal mb-10">
        <div className="w-full border border-grey-light ">
          <div className="  w-full bg-gray-200 border-b border-grey-light mb-10">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
              <div className="pl-4 flex items-center">
                <svg
                  className="h-5 pr-3 fill-current text-teal-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
                </svg>
                <a
                  className="text-teal-700 text-base no-underline hover:no-underline font-extrabold text-xl"
                  href="#"
                >
                  {" "}
                  Giphy Search
                </a>
                <div
                  id="search-toggle"
                  className="search-icon cursor-pointer pl-6"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 border b-gray-400 mx-auto my-10 overflow-x-scroll text-white mt-10">
        <div className=" justify-evenly w-full">
          <h1 className="text-white  text-3xl">Title: {gif.title}</h1>
          <br />
          <img className="w-100" src={gif.images.original.url} alt="gif" />
        </div>
        <br />
        <h1 className="text-white font-bold text-xl">Description:</h1>
        <hr />
        <hr />
        <JSONPretty
          id="json-pretty"
          style={{ fontSize: "1.1em" }}
          data={gif}
          mainStyle="padding:1em"
          valueStyle="font-size:1.5em"
        ></JSONPretty>
      </div>
    </>
  );
}

export default App;
