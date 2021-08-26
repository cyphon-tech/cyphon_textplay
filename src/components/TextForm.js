import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>
  {
    // console.log("upper case was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase !","success");
  }
  const handleLoClick =()=>
  {
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase !","success");
  }
  const handleClearClick =()=>
  {
    let newText="   ";
    setText(newText);
    props.showAlert("text cleared !","success");
  }
  const handleOnChange =(event)=>{
    // console.log("on change");
    setText(event.target.value);
  }

  const handleExtraSpaces=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces are removed !","success");
  }
  const handleCopy=()=>
  {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied !","success");
  }
const [text,setText]=useState('');
// setText("new Text");

    return (
      <>
        <div className="container"  style={{color:props.Mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>            
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>            
<button className="btn btn-primary mx-2" onClick={handleClearClick} >clear text</button>            
<button className="btn btn-primary mx-2" onClick={handleCopy} >copy text</button>            
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>            
        </div>
        <div className="container my-3" style={{color:props.Mode==='dark'?'white':'#042743'}}>
              <h1>Your text summary</h1>
              <p>{text.split(" ").length} words and {text.length} character</p>
              <p>{0.008* text.split(" ").length }minutes to read</p>
              <h2>preview</h2>
              <p>{text.length>0?text:"enter your text first"}</p>
        </div>
        </>
    )
}
