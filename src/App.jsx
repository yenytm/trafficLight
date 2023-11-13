// import './App.css'
import { useEffect, useState } from "react";
import { Light } from "./Light";

export default function App() {
  const [activeLight, setActiveLight] = useState("red");
  const [isActive, setIsActive] = useState(true)
  useEffect(()=>{
    const interval = setInterval(() => {
      if (!isActive) {
        return
      }
          switch(activeLight){
            case "red": 
            setActiveLight("yellow")
            break
            case "yellow":
              setActiveLight("green")
              break
            case "green":
               setActiveLight("red");
          }
    }, 3000);
    return() => clearInterval(interval)
  })


  return (
    <>
    <div  className="lightHandle">

    </div>
      <div  className="trafficLight">
        <Light  color="red" opacity={activeLight==="red" ? 1:0.4} />
        <Light color="yellow" opacity={activeLight==="yellow" ? 1:0.4} />
        <Light color="green" opacity={activeLight==="green" ? 1:0.4}/>
      </div>
      <button style={{margin: "auto", display: "flex", marginTop: "1rem"}} onClick={()=> setIsActive(!isActive)} >
        Play/Stop
      </button> 
      <h1 style={{margin: "auto", width: "fit-content"}}>
        {activeLight}
      </h1>
    </>
  );
}
