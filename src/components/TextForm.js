import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert ("success,Converted to UpperCase");
  };

  const handleLoClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert ("success,Converted to LowerCase");
  };

//to copy the text 
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert ("success,Message Copied"); 
  };
const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}


  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };



  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };



  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style = {{ color : props.mode==='dark' ? 'white' :'black' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style = {{ backgroundColor : props.mode=== 'dark' ? 'black' :'white' ,
            color: props.mode ==='dark' ? 'white' : 'black'}}
            id="myBox"
            rows="8"
          >
          </textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert To Uppercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx- my-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy Text</button>
       <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-2" style = {{ color : props.mode==='dark'?'white' :'black' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
        <h2 >Preview</h2>
        <p >{text.length>0?text:'Enter something to preview' }</p>
      </div>
    </>
  );
}
