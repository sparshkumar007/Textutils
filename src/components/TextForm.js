// rfc
// useState is a hook which hepls to create states
import React,{useState} from 'react'

export default function TextForm(props) {
    // text="hello there";
    // this type of syntax is not allowed in react to change any variables value
    // we use this here ;-below bdo
    const [text,setText]=useState('Enter text here');
    // setText("hello there");// correct way to change the state

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
      }
      const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
      }
      const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text cleared!","success");
      }
      const handleInverseClick=()=>{
        let temp=text.split(" ");
        let reverseTemp=temp.reverse();
        let newText=reverseTemp.join(" ");
        setText(newText)
        props.showAlert("Inverse text generated!","success");
      }
      const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>convert to upper case</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>convert to lowercase case</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleInverseClick}>Inverse text</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handleCopyClick}>Copy text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing in the textbox to preview it here"}</p>
    </div>
    </>
  )
}