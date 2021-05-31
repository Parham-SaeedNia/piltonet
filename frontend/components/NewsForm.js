import React, { useState } from "react";
import axios from "axios";
import validator from "validator";

const NewsForm = () => {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newEmail = {
      email: input.email,
    };
    if (validator.isEmail(newEmail.email.toString())) {
      setMessage("ایمیل شما با موفقیت ثبت شد");
      if (process.browser) {
        const formHeading = document.querySelector(".form-heading");
        const emailInput = document.querySelector(".email");
        const buttonInput = document.querySelector(".button");
        formHeading.classList.add("hidden");
        emailInput.classList.add("hidden");
        buttonInput.classList.add("hidden");
      }
    } else {
      setMessage(<p style={{ color: "red" }}>لطفا ایمیل معتبر وارد نمایید</p>);
    }
    axios.post("http://localhost:3001/create", newEmail);
  }

  return (
    <>
      <div dir="ltr" className="form-container">
        <form className="input-container">
          <h1 className="form-heading">
            برای اطلاع از آخرین اخبار ایمیل خود را وارد کنید{" "}
          </h1>
          <input
            onChange={handleChange}
            name="email"
            value={input.email}
            className="email"
            type="email"
            placeholder="Example@example.com"
          />
          <input
            onClick={handleClick}
            className="button"
            type="button"
            value="ثبت"
          />
          <span className="validator-message">{message}</span>
        </form>
      </div>
    </>
  );
};

export default NewsForm;
