import React,{useState} from 'react'

export default function Form() {
  const printText = () =>{
     let newText = text.toUpperCase();
     setText(newText);
  }
  const lowerText = () =>{
     let newText = text.toLowerCase();
     setText(newText);
  }
  const pasteText = () =>{
     navigator.clipboard.readText()
     .then((data)=>{
          setText(data);
     })
     .catch(()=>{

     });
  }
  const copyText = () =>{
     var copyText = document.getElementById('textBox');
     copyText.select();
     navigator.clipboard.writeText(copyText.value);
  }
  const addText = (event) =>{
     setText(event.target.value);
  }
  const removeSpacesText = () =>{
     var spaceText = text.split(/[ ]+/);
     setText(spaceText.join(' '));
  }
  const clearText = () =>{
     setText('');
  }
  const [text, setText] = useState('')
  return (
    <div >
         <textarea id='textBox' value={text} rows={10} onChange={addText} placeholder='enter text here'></textarea><br/>
         <button onClick={printText}>
               upper case
         </button>
         <button onClick={lowerText}>
               lower case
         </button>
         <button onClick={clearText}>
               clear
         </button>
         <button onClick={copyText}>
               copy
         </button>
         <button onClick={pasteText}>
               paste
         </button>
         <button onClick={removeSpacesText}>
               remove extra spaces
         </button>
         
    </div>
  )
}
