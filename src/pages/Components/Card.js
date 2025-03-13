import './Card.css'

function Card(props){
    return (
        <div className = 'Card'>
            <img src = {props.src} className = 'img'/>
            <h1 className='card-heading'>{props.Heading}</h1>
            <p className="paragraph">{props.paragraph}</p>
        </div>
    )
}

export default Card;