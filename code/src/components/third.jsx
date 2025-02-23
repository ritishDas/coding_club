import Slider from './slider/slider';

export default function(props){
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
);
}
