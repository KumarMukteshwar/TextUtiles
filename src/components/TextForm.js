import React,{useState} from 'react'
// Using the React-Hooks.

export default function TextForm(props) {
    const HandleUpClick =()=>{
        // console.log("Uppercase was Clicked: " + text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase" ,"Success")
    }
    const HandleClearClick =()=>{
        // console.log("Uppercase was Clicked: " + text );
        let newText = '';
        setText(newText);
        props.showAlert("Clear all the Give Text " ,"Success")
    }
    
    const HandlelowClick =()=>{
        // console.log("Uppercase was Clicked: " + text );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase" ,"Success")
    }
    const HandleExtraSpace =()=>{
        // console.log("Uppercase was Clicked: " + text );
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed the extra space " ,"Success")
    }
    // const HandleClear=()=>{
    //     console.log("I am a copy")
    //     let text = document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0,99999);
    //     navigator.clipboard.writeText(text.value);
    // }
        
    

    const HandleOnChange =(event)=>{
        // console.log("On Change ");
        setText(event.target.value)
    }

    const [text,setText] = useState(''); // using state.
  return (
    <>
    <div className='container'style={{color:props.Mode ==='dark'?'white':'#042743'}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox1" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value = {text} onChange={HandleOnChange} style={{backgroundColor: props.Mode ==='dark'?'#13466e':'white', color:props.Mode ==='dark'?'white':'#042743'}} id="mybox1" rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleUpClick} > Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandlelowClick} > Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={HandleClearClick} > Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpace} > RemoveExtraSpace</button>
    </div>
    <div className="container my-2" style={{color:props.Mode ==='dark'?'white':'#042743'}}>
        <h2>Your text is summary here</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes to read the one words. </p>
        <h2>Previews</h2>
        <p>{text.length>0 ? text:"Enter something in the text to preview it here."}</p>
    </div>

        

    </>
  )
}
