import { httpGet } from "../../helpers/httpActions";
import React, { useState } from "react";
const Apps = () => {
  const [searchWord, setSearchWord] = useState("");
  const [list, setList] = useState([]);
  const getGiphy = async (id) => {
    try {
      let res = await httpGet(searchWord);
      if (res.status === 200) {
        console.log(res.data.data, "success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSearchWord(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div id="header" className="fixed w-full ">
        <div className="relative w-full z-10 fixed top-0 bg-gray-200 border-b border-grey-light">
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

        <div className="container mx-auto my-20 w-full rounded-full justify-between bg-white shadow-xl">
          <div className="flex mx-auto w-full rounded-full text-black">
            <input
              id="searchfield"
              type="search"
              placeholder="Search..."
              value={searchWord}
              onChange={handleChange}
              autoFocus="autofocus"
              className="w-full text-grey-800 py-4 pl-10  rounded-lg transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
            />
            {/* <div className="w-2/4"></div> */}
            <button
              className="w-1/5 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-sm shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
              onClick={() => {
                getGiphy();
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
