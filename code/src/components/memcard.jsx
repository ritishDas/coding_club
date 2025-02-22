export default function(props){
    return(
        <div className='memcard-div flexbox'>
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <h5>{props.title}</h5>
        </div>
    )
}