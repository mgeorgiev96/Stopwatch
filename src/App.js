import React,{useEffect,useState} from 'react';
import './css/style.css';


function App() {

  const [data,setData] = useState({
    hours: 0,
    minutes: 0,
    seconds:0
  })

  const start = ()=>{
    let hour = 0
    let sec = 0
    let min = 0
    setInterval(()=>{
      sec += 1
      if(sec===60){
        sec=0
        min+=1
        if(min===60){
          min =0
          hour +=1
        }
      }
      setData({
        hours: hour,
        minutes: min,
        seconds: sec
      })
    },1000)
  }
  return (
    <div className="container">
    <div className='chronometer'>
      <p>{data.hours < 10? "0" + data.hours : data.hours} :</p>
      <p>{data.minutes < 10? "0" + data.minutes: data.minutes}</p>
      <p>:{data.seconds < 10? " 0" + data.seconds : data.seconds}</p>
    </div>
    <button onClick={start}>Start</button>
    </div>
  );
}

export default App;
