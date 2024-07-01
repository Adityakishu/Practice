import React, { useState } from 'react';
export default function Textanalyzer() {

  let [text, setText] = useState('');

  let handleUppercase = () => {
    setText(text.toUpperCase());
  };

  let handleLowercase = () => {
    setText(text.toLowerCase());
  };

  let handleCube = () => {
    let number = parseFloat(text);
    if (!isNaN(number)) {
      setText(Math.pow(number, 3).toString());
    } else {
      alert("Enter a valid number");
    }
  };

  const handleStyle = () => {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    let d = 500 + Math.floor(Math.random() * 900); 
    let e = 20 + Math.floor(Math.random() * 80); 
    
    const textarea = document.getElementById("exampleFormControlTextarea1");
    
    textarea.style.color = `rgba(${a}, ${b}, ${c})`;
    textarea.style.fontWeight = d.toString(); 
    textarea.style.fontSize = `${e}px`; 

  };

  let handleWelcome = () => {
    alert("Welcome!! " + text);
  };

  return (


    <div className="container mt-5">
      <div className="form-group text-center" style={{ marginBottom: '20px' }}>
        <label htmlFor="exampleFormControlTextarea1"><h2 >Text Analysis</h2></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          style={{ width: "50%", margin: "0 auto" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>


      <div className="text-center mb-5 me-2">
        <button type="button" className="btn btn-primary mr-5" onClick={handleUppercase} style={{ marginRight: '25px' }}>Uppercase</button>
        <button type="button" className="btn btn-secondary mr-2" onClick={handleLowercase} style={{ marginRight: '25px' }}>Lowercase</button>
        <button type="button" className="btn btn-success mr-2" onClick={handleCube} style={{ marginRight: '25px' }}>Cube</button>
        <button type="button" className="btn btn-danger mr-2" onClick={handleStyle}style={{ marginRight: '25px' }}>Style</button>
        <button type="button" className="btn btn-info" onClick={handleWelcome}style={{ marginRight: '25px' }}>Welcome</button>
      </div>
    </div>


  );
}
