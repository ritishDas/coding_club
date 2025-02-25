export default function(props){
    return(
        <div className="memcard-div">
            <img src={props.image}/>
            <h3>{props.head}</h3>
            <p>{props.para}</p>
        </div>
    )
}