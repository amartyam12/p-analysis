import React from "react";

function Show(props){
    return (
        <div>
          {props.sentences.map((data)=>{
            return(
                <>
                <h1><span style={{border:"3px solid yellow", padding:"5px 5px", borderRadius:"10px",backgroundColor:"black",color:"red"}}>Polarity:{data.sentence}</span></h1>
      <h1><span style={{border:"3px solid yellow", padding:"5px 5px",borderRadius:"10px",backgroundColor:"black",color:"red"}}>Type: {data.polarity}</span></h1>
                </>
            )
          })}  
        </div>
    )
}
export default Show;