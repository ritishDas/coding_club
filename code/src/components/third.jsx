import {useState} from 'react'
import Slider from './slider/slider';

export default function(props){
    /*
return(
<div className="third flexbox">  
<div className="third-slider">
<Slider images={props.images} uid={props.id}/>
</div>
<div className="third-one flexbox">
<div className="third-two flexbox">
<img src={props.logo}/>
<div>
<h1>{props.name}</h1>
<h1>{props.date}</h1>
</div>
</div>
<div><span>{props.details}</span></div>
</div>
</div>
);*/
const [sliderstate,setSlider] = useState(false);

return(<div className='third flexbox'>
<img src={props.logo}/>
<div className='flexbox'>
<h1>{props.name}</h1>
<h1>{props.date}</h1>
<p>{props.details}</p>
<button onClick={()=>setSlider(true)}>Album</button>
{sliderstate&&<Slider images={props.images} fun={setSlider}/>}
</div>
</div>);
}
