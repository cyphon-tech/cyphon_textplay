// import { element } from 'prop-types';
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
    document.getSelection().removeAllRanges();
    props.showAlert("text copied !","success");
  }
const [text,setText]=useState('');
// setText("new Text");

    return (
      <>
        <div className="container"  style={{color:props.Mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.Mode==='dark'?'#13466e':'white',color:props.Mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to uppercase</button>            
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to lowercase</button>            
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >clear text</button>            
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >copy text</button>            
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces} >Remove extra spaces</button>            
        </div>
        <div className="container my-3" style={{color:props.Mode==='dark'?'white':'#042743'}}>
              <h1>Your text summary</h1>
              <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
              <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length }minutes to read</p>
              <h2>preview</h2>
              <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
