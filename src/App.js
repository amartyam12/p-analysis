
import React,{ useState } from 'react';
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
  //   return console.log(result.result.polarity);
  // }
  // function type(){
  //   return console.log(result.result.type);
  // }
  const polarity=result.result.polarity;
  const type= result.result.type;
 

  return (
    <>    <div className="App">
      <h1 style={{color:"blueviolet"}}>Paragraph Analysis</h1>
      <input style={{height:"100px",width:"700px",fontSize:"30px",borderRadius:"10px"}}type="text" name="input" value={input}onChange={(e)=>{setInput(e.target.value)}}/>
      <br/>
      <br/>
      <br/>
      <input style={{fontSize:"20px",fontFamily:"cursive",padding:"8px 8px",borderRadius:"5px",backgroundColor:"blue",color:"white",border:"3px dotted white"}}type='button' onClick={submitHandler} value="Check for Sentiment"/>
      <br/>
      <br/>
      <h1><span style={{border:"3px solid yellow", padding:"5px 5px", borderRadius:"10px",backgroundColor:"black",color:"red"}}>Polarity:{polarity}</span></h1>
      <h1><span style={{border:"3px solid yellow", padding:"5px 5px",borderRadius:"10px",backgroundColor:"black",color:"red"}}>Type: {type}</span></h1>
     
    </div>
    </>

  );
}

export default App;
