import React, { useState } from "react";

export default function TextForm(props) {
  const countWords = (text) => {
    const arr = text.split(" ");
    let newArr = arr.filter((word) => {
      return word !== String("");
    });
    return newArr.length;
  };
  const handleUpClick = () => {
    //console.log("Uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    //console.log("Uppercase" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is removed", "success");
  };
  const handleOnChange = (event) => {
    //console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#1a195c;" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#1a195c;",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#1a195c;" }}
      >
        <h2>Text Summary</h2>
        <p>
          {countWords(text)} words, {text.length} characters
        </p>
        <p>{0.008 * countWords(text)} minutes read</p>
        <h3> Preview </h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview"}
        </p>
      </div>
    </>
  );
}
