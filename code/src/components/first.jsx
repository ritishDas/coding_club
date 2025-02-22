import Member from './memcard'
import data from '../data/data.js'
export default function(){
  console.log(data)
return(
<div className="first">
<div className = "flexbox">
  <Member image="./vite.svg" name={data.Teacher[0].name} title={data.Teacher[0].title}/>
  </div>
<div className = "flexbox firstseconddiv">
  <Member image="./vite.svg" name={data.Teacher[1].name} title={data.Teacher[1].title} />
  <Member image="./vite.svg" name={data.President[0].name} title={data.President[0].title}/>
  </div>
  </div>
);
}
