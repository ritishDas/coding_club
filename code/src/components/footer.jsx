import {Link,useNavigate} from "react-router-dom"
export default function(){
    const navigate = useNavigate();
    return(
    <footer >
    <div>
        <img src="./logo.png" onClick={()=>{window.location.href=("https://www.kdkce.edu.in/")}}/>
   <h1 onClick={()=>{navigate('/')}}>Coding<br/>Club</h1> 
    </div>
    <div>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>
        <Link to="/#about">About</Link>
        <Link to="/#event">Events</Link>
        <Link to="/join">Join us</Link>
    </div>
    <div>
<h3>Stay Connected</h3>
        <Link to="/#">Instagram</Link>
        <Link to="/#">LinkedIn</Link>
        <a href="https://www.kdkce.edu.in/">College Website</a>
    </div>
    </footer>
    ); 
}