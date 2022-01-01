import { useEffect, useRef } from "react";
import "./App.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function App() {
  const searchRef = useRef(null);

  console.log(searchRef.current);

  const handleScroll = () => {
    if (searchRef.current.getBoundingClientRect().bottom < 0) {
      searchRef.current.classList.add("fixed-search");
    }

    if (window.pageYOffset === 0) {
      searchRef.current.position = "relative";
      searchRef.current.classList.remove("fixed-search");
    }

    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="app">
      <div className="header">
        <div className="nav">
          <AiOutlineMenu className="menu__icon" />
          <img
            className="logo"
            src="https://s.zillowstatic.com/pfs/static/z-logo-white.svg"
            alt=""
          />
          <p className="auth">Sign in</p>
        </div>
        <div className="hero__img"></div>
        <div className="hero">
          <h1 className="hero__title">Change starts here</h1>
          <div className="hero__input" ref={searchRef}>
            <input type="text" />
            <FiSearch className="search__icon" />
          </div>
        </div>
      </div>
      <div className="main">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aperiam
          asperiores beatae quod enim aspernatur.
        </p>
      </div>
    </div>
  );
}

export default App;
