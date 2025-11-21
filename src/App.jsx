import React ,{useEffect,useState} from "react";
import './index.css'
const App=()=>{
  const hours=new Date().getHours();
  const mins=new Date().getMinutes();
  const secs=new Date().getSeconds();
  const day=new Date().getDay();
const month= new Date().getMonth()
const year= new Date().getFullYear()

const [secsDisplay,setSecsDisplay]=useState(false);
  const [time,setTime]=useState(new Date())
  const [is24HoursFormat,setis24HoursFormat]=useState(true);

const DaysArr=["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
const MonthsArr=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

useEffect(()=>{
  const timer=setInterval(()=>{
    setTime(new Date())
  },1000)
  return()=>clearInterval(timer)
},[])
const HandleHours=(hours)=>{
return !is24HoursFormat ? (hours < 10 ? `0${hours}` : hours) : (hours > 12 ? hours - 12 : (hours < 10 ? `0${hours}` : hours));
}
  return(
    <>
    <div className="app">
      <div className="container">
        <div className="date">{DaysArr[day]+ "," + day + " " + MonthsArr[month]+ " "+ year}
<div className="AmOrPm">
  {is24HoursFormat?(hours>=12?"PM":"AM"):""}
</div>

        </div>
<div className="clock">
  <div className="Hours numbers">{HandleHours(hours)}</div>
<div className="colon">:</div>
<div className="mins numbers">{mins==0?'00':mins<10?`0${mins}`:mins}</div>
<div className={secsDisplay?"colon":"hideSec"} >:</div>
<div className={secsDisplay?"secs numbers":"hideSec"}>{secs==0?'00':secs<10?`0${secs}`:secs}</div>
</div>
<div className="buttons">
<button className="btn" id="secs" onClick={()=>setSecsDisplay(!secsDisplay)}>{secsDisplay?"hide":"view"}secs</button>
  <button className="btn" onClick={()=>setis24HoursFormat(!is24HoursFormat)}>{is24HoursFormat?"24 hours system":"12 hours system"}</button>
</div>

      </div>
    </div>
    </>
  )
}
export default App