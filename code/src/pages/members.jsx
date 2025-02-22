import data from '../data/data.js'
import Member from '../components/memcard.jsx';
import Nav from '../components/navbar.jsx'
export default function () {
    let keys = Object.keys(data);

    return (<div className='member-div'>
        <Nav />
        <div className='member-main'>
        <h1>Our Team</h1>
        <h4>Meet the passionate leaders of our coding club.</h4>
{keys.map((title, index) => {
            if (index % 2) return;

            return (<div className="flexbox">
                <div>
                    <h4>{title}</h4>
                    <div className='flexbox'>{
                        data[title].map((content, index) => {
                            return (<Member image="./vite.svg" name={content.name} title={content.title} />)
                        })}
                    </div>
                </div>
                <div>
                    <h4>{keys[index + 1]}</h4>
                    <div className='flexbox'>{data[keys[index + 1]].map((content, index) => {
                        return (<Member image="./vite.svg" name={content.name} title={content.title} />)
                    })}
                    </div>
                </div>
            </div>)
        })}
        </div>
    </div>);
}