import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Divinput,
  DivInputHeader,
  InputField,
  ImgProfile,
  DivButtonPost,
} from "./styles";

import ImageProfile from "assets/images/profile.jpg";

function Input({ addPost }) {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("EN");

  function onChange(e) {
    setInput(e.target.value);
  }

  function onKeyDown(e) {
    const title = e.target.value;
    if (e.key === "Enter" && title) {
      addPost(title);
      setInput("");
    }
  }

  function onClick() {
    addPost(input);
    setInput("");
  }

  function onClickSetLanguage() {
    if (language === "EN") {
      setLanguage("TH");
    } else {
      setLanguage("EN");
    }
  }

  return (
    <Divinput>
      <DivInputHeader>
        <div>{language === "EN" ? "Create Post" : "สร้างโพสต์"}</div>
        <div className='Button__language'>
          <button onClick={onClickSetLanguage}>
            {language === "EN" ? "TH/EN" : "ไทย/อังกฤษ"}
          </button>
        </div>
      </DivInputHeader>
      <InputField
        type='text'
        value={input}
        placeholder={
          language === "EN" ? "What's on your mind." : "คุณกำลังคิดอะไรอยู่"
        }
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <ImgProfile src={ImageProfile} alt='Img__profile' />
      <DivButtonPost input={input}>
        <button className='Button__post' onClick={onClick}>
          {language === "EN" ? "Post" : "โพสต์"}
        </button>
      </DivButtonPost>
    </Divinput>
  );
}

Input.prototype = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
