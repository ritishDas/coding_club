import Member from './memcard'
import data from '../data/data.js'
export default function(){
return(
<div className="first">
  <h1>Our Teachers And President</h1>
<div className = "flexbox">

  <Member image={data.College[0].image} name={data.College[0].name} title={data.College[0].title}/>

  <Member image={data.College[1].image} name={data.College[1].name} title={data.College[1].title}/>
  <Member image={data.Teacher[0].image} name={data.Teacher[0].name} title={data.Teacher[0].title}/>
  <Member image={data.Teacher[1].image} name={data.Teacher[1].name} title={data.Teacher[1].title} />
  </div>
<div className = "flexbox firstseconddiv">
  <Member image={data.President[0].image} name={data.President[0].name} title={data.President[0].title}/>
  <Member image={data.President[1].image} name={data.President[1].name} title={data.President[1].title}/>
  </div>
  </div>
);
}
