import Navbar from './components/navbar';
import Hero from './components/hero';
import Zero from './components/zero';
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import event from './data/event.js'
import './App.css'
import 'boxicons/css/boxicons.min.css';


function App() {
  return(<>
    <Hero/>
    <Navbar/>
    <h1 style={{textAlign:'center',margin:'50px'}}>Highlights</h1>
<div className='third flexbox'>
<img src='./hackthonix.png'/>
<div className='flexbox'>
<h1>Hackthonix</h1>
<h1>28 Feb 2025 9:00 AM</h1>
<p>A six hour hackathon in the campus of KDK college </p>
<button onClick={()=>{window.location.href="https://gh67fg.wixsite.com/hackthonix"}}>Read More</button>
</div>
</div>
    <Zero/>
    <First/>
    <Second/>
    <div id="events">
      <h1>Events</h1>
<Fourth/>
<h1>Upcoming Events</h1>
<div className='third flexbox'>
<img src='./hackthonix.png'/>
<div className='flexbox'>
<h1>Hackthonix</h1>
<h1>28 Feb 2025 9:00 AM</h1>
<p>A six hour hackathon in the campus of KDK college </p>
<button onClick={()=>{window.location.href="https://gh67fg.wixsite.com/hackthonix"}}>Read More</button>
</div>
</div>
      <h1>Past Events</h1>
      {event.map(
(data,index)=>{
  return(
<Third images={data.images}
     name={data.name} date={data.date} details={data.details} logo={data.logo}  key={index}/>
  )
 }) }
    </div>
    </>
    );
}

export default App
