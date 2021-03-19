import "../App.css";
import React, { useState } from "react";
import CardList from "../components/cards";
import { connect, useSelector } from "react-redux";
import { getGifs } from "../actions/Gif.actions";
import SearchBox from "../components/searchBox";

function App({ getGifs }) {
  const [searchWord, setSearchWord] = useState("");
  const [limit, setLimit] = useState(25);
  const getGiphy = async () => {
    try {
      await getGifs(searchWord, limit);
      console.log(list.length);
    } catch (err) {
      console.log(err);
    }
  };

  const {
    login: { loading, info },
  } = useSelector((state) => state);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
    console.log(e.target.value);
  };
  const list = info.data ? info.data.data : [];

  return (
    <>
      <div className="bg-gray-900 font-sans leading-normal tracking-normal">
        <div className="w-full border border-grey-light ">
          <div className=" fixed w-full bg-gray-200 border-b border-grey-light">
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
          <SearchBox
            searchWord={searchWord}
            handleChange={handleChange}
            handleClick={getGiphy}
          />
        </div>
      </div>
      {list.length ? (
        <h3 className="my-10 h3 text-white text-lg">
          {" "}
          {/* {count} Results found for "{searchWord}" */}
        </h3>
      ) : (
        ""
      )}
      <div data-testid="gifs" className="list-Items w-5/6 mx-auto flex flex-wrap justify-evenly justify-items-auto ">
        {list.length
          ? list.map((item, id) => {
              return <CardList data={item} id={id} />;
            })
          : ""}
      </div>
      <div className="w-full text-center text white my-10 mb-60">
        {/* <button
          className="w-1/5 p-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-sm shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          onClick={() => {
            setLimit(limit + 25);
            getGiphy();
          }}
        >
          Load More...
        </button> */}
      </div>
    </>
  );
}

const mapDispatchToProps = {
  getGifs,
};

export default connect(null, mapDispatchToProps)(App);
