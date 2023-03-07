import React, { useState } from 'react';



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log('Uppercase was clicked'+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
      let newText = text.toLowerCase();
      setText(newText)
    }

    const handleCopy = ()=>{
      let text = document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value)
    }
    
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(' '))
    }
   
    // const handleColor = ()=>{
    //   let text = document.getElementById('myBox').style.color = 'red'
    //   // setText(newText)

    // }

  //   const speak = () => {
  //     let msg = new SpeechSynthesisUtterance(text);
  //     window.speechSynthesis.speak(msg);
  //     const toogle = document.getElementById('toggle')
  //     if (toogle.textContent === "Speak") {
  //         toogle.innerHTML = "Stop"
  //     }
  //     else {
  //         toogle.innerHTML = "Speak"
  //         if (toogle.innerHTML = "Speak"){
  //             window.speechSynthesis.cancel()
  //         }
  //     }
  // }
    
    const handleClearClick=()=>{
      let newText =''
      setText(newText)
    }
    const handleOnChnage=(event)=>{
        // console.log('on change')
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
  return (
    <>
     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control"
          value={text} onChange={handleOnChnage} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows={10}  />
          <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppcase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy to clipboard</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove whitespaces</button>
          {/* <button className="btn btn-primary my-2 mx-2" onClick={handleColor}>Change color red</button> */}
          {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button> */}
          <button className="btn btn-danger my-2 mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
     </div>
     <div className='container counter' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text here</h3>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  )
}
