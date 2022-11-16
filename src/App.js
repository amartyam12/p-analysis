
import React,{ useState } from 'react';
import Show from './Show';
import './App.css';

function App() {
  const [input,setInput]=useState("");
  const [result,setResult]=useState([]);
 
  function submitHandler(){
    fetch("https://sentim-api.herokuapp.com/api/v1/",{
      method: 'POST',
      headers:{
        Accept: "application/json", 
        "Content-Type": "application/json"
      },
      body:JSON.stringify({ "text": input }),
    }).then(res=>res.json()).then((result)=>{
      setResult(result);
      console.log(result);
    })
    let data=JSON.stringify({"text": input})
    console.log(data);
    
  }
 

  // function polarity(){
  //   return (result.result.polarity);
  // }
  // function type(){
  //   return (result.result.type);
  // }
  // var polarity="";
  // polarity=result.result.polarity;
  // console.log(polarity);
  // var type= "";
  // type=result.result.type;
 

  return (
    <div className="App">
      <h1 style={{color:"blueviolet"}}>Paragraph Analysis</h1>
      <input style={{height:"100px",width:"700px",fontSize:"30px",borderRadius:"10px"}}type="text" name="input" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <br/>
      <br/>
      <br/>
      <button style={{fontSize:"20px",fontFamily:"cursive",padding:"8px 8px",borderRadius:"5px",backgroundColor:"blue",color:"white",border:"3px dotted white"}}type='button' onClick={submitHandler}>Check for Sentiment</button>
      <br/>
      <br/>
      <h1><span style={{border:"3px solid yellow", padding:"5px 5px", borderRadius:"10px",backgroundColor:"black",color:"red"}}>Polarity{result?.result?.polarity}:</span></h1>
      <h1><span style={{border:"3px solid yellow", padding:"5px 5px",borderRadius:"10px",backgroundColor:"black",color:"red"}}>Type:{result?.result?.type}</span></h1>
      
      {/* <Show result={result}/> */}
      
    </div>


  );
}

export default App;
