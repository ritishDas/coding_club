import Member from './memcard'
import data from '../data/data.js'
export default function(){
return(
<div className="first">
<div className = "flexbox">
  <Member image={data.Teacher[0].image} name={data.Teacher[0].name} title={data.Teacher[0].title}/>
  </div>
<div className = "flexbox firstseconddiv">
  <Member image={data.Teacher[1].image} name={data.Teacher[1].name} title={data.Teacher[1].title} />
  <Member image={data.President[0].image} name={data.President[0].name} title={data.President[0].title}/>
  </div>
  </div>
);
}
