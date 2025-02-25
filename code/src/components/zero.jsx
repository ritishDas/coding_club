import { useNavigate } from "react-router-dom"
export default function(){
    const navigate = useNavigate();
    return(
        <div className="zero-div flexbox">
<img src="./hero.png"/>
<div className="flexbox">
    <h1>Join Our Exciting<br/>Coding Club Today!</h1>
    <p>Welcome to our coding club, where creativity meets technology! Discover new skills, collaborate with peers, and unleash your potential in a fun and supportive environment.</p>
   <button onClick={()=>{navigate('/join')}}>Join</button> 
</div>
        </div>
    )
}