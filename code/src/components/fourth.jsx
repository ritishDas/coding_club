import { useNavigate } from "react-router-dom";
import Card from './subfourth'
export default function(){
    const navigate = useNavigate();
return(
<div className="fourth flexbox">
    <h1>Explore Our Dynamic Coding Club Activities</h1>
    <p>Join us for workshops, hackathons, and collaborative projects that enhance your coding skills. Our club fosters a supportive environment where creativity and innovation thrive.</p>
    <div className="flexbox">
        <Card image='./vite.svg' head="Celebrating Our Achievements and Milestones" para="We have successfully hosted numerous coding competitions and workshops." />
        <Card image='./vite.svg' head="Exclusive Benefits for Our Members" para="Members enjoy access to resources, mentorship, and networking opportunities." />
        <Card image='./vite.svg' head="Get Involved and Start Coding Today" para="Join us to elevate your coding journey!" />
    </div>
    <button onClick={()=>{Navigate('/link')}}>join</button>
</div>
);
}
