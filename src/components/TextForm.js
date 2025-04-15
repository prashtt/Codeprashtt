import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Hii prashtt!');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success"); // Alert after conversion
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success"); // Alert after conversion
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared", "warning"); // Alert after clearing
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "info"); // Alert after copy
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={text.length === 0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} disabled={text.length === 0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} disabled={text.length === 0}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick} disabled={text.length === 0}>
          Copy to Clipboard
        </button>
        <button
          className="btn btn-danger mx-2 my-1"
          onClick={() => window.open("https://dancewebsite-tb1u.onrender.com/", "_blank")}
        >
          Visit Dance Website
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something above to preview here."}</p>
      </div>
    </>
  );
}
