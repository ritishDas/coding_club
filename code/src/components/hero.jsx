import Cwr from './cwr';
import { useNavigate } from 'react-router-dom';

export default function(){
  const navigate = useNavigate();
return(
<div className = "hero">
  <div className = "hero-nav flexbox">
<img src = './logo.png'/>
<h1>Coding Club</h1>
<img src = './cclogo.png'/>
  </div>
  <div className = "hero-hero flexbox">
<Cwr/>
  <button onClick={()=>{navigate('/join')}}>Join Us</button>
  </div>
  <div className = "hero-menu flexbox">
  <div className = "flexbox">
<span onClick={()=>{navigate("/members");console.log("ok")}}>Members</span>
<span onClick={()=>{window.location.href='#events'}}>Event</span>
<span onClick={()=>{window.location.href='#about'}}>About</span>
  </div>
  </div>
  </div>
);
}
