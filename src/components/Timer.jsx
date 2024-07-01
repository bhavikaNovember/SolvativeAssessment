import React,{useState,useRef} from "react";

const Timer = () =>{

    const [count,setCount] = useState(0)
    const intervalRef=useRef;
    const [finalCount,setFinalCount] = useState(0)
    const [increasing,setIncreasing] = useState(false)

    const startTimer = () =>{
          intervalRef.current = setInterval(()=>{setCount(prevState => prevState+1)},1000)
    }

    const pauseTimer = ()=>{
        if(increasing == true){
          startTimer()
        }
        else clearInterval(intervalRef.current)
    }

    const stopTimer = () =>{
          setCount(0)
          clearInterval(intervalRef.current)
    }

    return(
    <>
    <p className="text-base font-medium ml-4 ">COUNT : {count}</p>
    <div className="flex gap-2 mt-4 mb-4 ml-4">
    <button onClick={()=>startTimer()}>Start</button>
    <button onClick = {()=>{
        setIncreasing(!increasing)
        pauseTimer()
        }}>Pause</button>
    <button onClick = {()=>{
       setFinalCount(count)
        stopTimer()
    }}>Stop</button>
    <button onClick = {()=>{
        setFinalCount(0)
        stopTimer()}}>Reset</button>
    </div>
    <p className="text-base font-medium ml-4">FINAL TIME : {finalCount} seconds</p>
    </>
    )
}

export default Timer;
