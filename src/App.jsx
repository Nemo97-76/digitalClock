import { useState ,useEffect} from 'react'
import './index.css'

function App() {

const [time, setTime] = useState(new Date().getDate())
const [isSecVisible, setIsSecVisible] = useState(true)
const [is24HourFormat, setIs24HourFormat] = useState(false)
useEffect(()=>{
const timer = setInterval(() => {
  setTime(new Date())
},1000)
return () => clearInterval(timer)
},[])
var hours = new Date().getHours()
var minutes = new Date().getMinutes()
var seconds = new Date().getSeconds()
var day= new Date().getDay()
const DaysArr=["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
const MonthsArr=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month= new Date().getMonth()
return (
    <>
    <div className='sono-date'>
    {DaysArr[day]+ "," + new Date().getDate() + " " + MonthsArr[month]+ " "+ new Date().getFullYear()}
   </div>
    <div className="sono-body">
<div className='hours'>
{  ((!is24HourFormat&&hours>12)?setHours(hours-12):hours)||hours<10?'0'+ hours:hours
}
  </div>
  <div className='dots'>:</div>
   <div className='minutes'>
{minutes==0?'00':minutes<10?`0${minutes}`:minutes}
  </div>
{isSecVisible && 
<>
<div className='dots'>:</div>
<div className='seconds'>
{seconds==0?'00':seconds<10?`0${seconds}`:seconds}
   </div>
</>
}
{!is24HourFormat && <div className='AmOrPm'>{hours>12?"pm":"am"}</div>
}
  </div> 
      <button className='sono-BTN' onClick={()=>setIsSecVisible(!isSecVisible)}>{isSecVisible?"hide seconds":"view seconds"}</button>
  <button className='sono-BTN' onClick={()=>setIs24HourFormat(!is24HourFormat)}>{is24HourFormat?"12 hours format":"24 hours format"}</button>
   
   
    </>
  
      )
}

export default App
