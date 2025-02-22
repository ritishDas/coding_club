import Navbar from './components/navbar';
import Hero from './components/hero';
import Zero from './components/zero';
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
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
<Third images={['./vite.svg','./vite.svg','./vite.svg',]}
     name="Smart India Hackthon" date="Ahemdabad 2nd Feb 2:00 AM" details="This 
     is a demo event page" logo="./vite.svg" id="third1"/>
    <Third images={['./vite.svg','./vite.svg','./vite.svg',]}
     name="Smart India Hackaton" date="Ahemdabad 2nd Feb 2:00 AM" details="This 
     is a demo event page" logo="./vite.svg" id="third2"/>
    <Third images={['./vite.svg','./vite.svg','./vite.svg',]}
     name="Smart India Hakathon" date="Ahemdabad 2nd Feb 2:00 AM" details="This 
     is a demo event page" logo="./vite.svg" id="third3"/>
    </div>
    </>
    );
}

export default App
