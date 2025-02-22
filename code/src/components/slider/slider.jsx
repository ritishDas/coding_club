import {useRef,useEffect} from 'react';
import './slider.css';

export default function({images,uid}){
 const fixer = ()=>{

   return({
     left:`50%`
   });
 }
  let currentImage = 0;
  const prevref = useRef(null);
  const nextref = useRef(null);
  const sliderref = useRef(null);

  useEffect(()=>{
    let offset = 0;
    let last_trigger = 0;
    sliderref.current.addEventListener('scroll',()=>{
const div = sliderref.current.lastChild;
	let element = div.children[currentImage].firstChild;
      element.style.background='white';
 
const amount = sliderref.current.scrollLeft;
      currentImage = Math.floor(amount/913);
      if(currentImage===0) prevref.current.style.display='none';
      else prevref.current.style.display='block';

      if(currentImage===images.length-1) nextref.current.style.display='none';
      else nextref.current.style.display='block';

     element = div.children[currentImage].firstChild;
      element.style.background='grey';
      
    });

  },[]);

return(<div className="slider">

  <div className="sliderbuttonleft"><b ref = {prevref} onClick={()=>{
  console.log(`#sliderimage${currentImage-1}l${uid}`)
window.location.href=`#sliderimage${currentImage-1}l${uid}`}}>P</b></div>

<div ref={sliderref} className="sliderselect">
{images.map((image,ind)=><img src={image} id={`sliderimage${ind}l${uid}`} key={ind}/>)}
<div style={fixer()}> {images.map((i,ind)=>{
return(<a href={`#sliderimage${ind}l${uid}`} key={ind}><span></span></a>);
})}

</div>
</div>

  <div className="sliderbuttonright"><b ref = {nextref} onClick={()=>{
    
  console.log(`#sliderimage${currentImage+1}l${uid}`)
    window.location.href=`#sliderimage${currentImage+1}l${uid}`}}>N</b></div>

  </div>);
}
