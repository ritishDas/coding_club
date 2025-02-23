import Navbar from './components/navbar';
import Hero from './components/hero';
import Zero from './components/zero';
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import event from './data/event.js'
import './App.css'

function App() {
  return(<>
  
    <Hero/>
    <Navbar/>
    <Zero/>
    <First/>
    <Second/>
    <div id="events">
      <h1>Events</h1>
<Fourth/>
<h1>Upcoming Events</h1>
<div>//Our hackathon poster and details</div>
      <h1>Past Events</h1>
      {event.map(
(data,index)=>{
  console.log(data)
  return(
<Third images={data.images}
     name={data.name} date={data.date} details={data.details} logo={data.logo} id={`third${index}`} key={index}/>
  )
 }) }
    </div>
    </>
    );
}

export default App
