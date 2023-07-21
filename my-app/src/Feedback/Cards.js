import { FaStar ,FaRegStar} from 'react-icons/fa'
import {BsStarHalf} from 'react-icons/bs'

const Cards = (props) => {


    const handleDeleteClick=()=>{
            props.handleDelete(props.index)
    }

    const getStar=(rating)=>{
        console.log(rating);
        let star=[]
        let starValue=rating
        for(let i=0;i<=5;i++){
            if(starValue>i){
                star.push(<FaStar color='yellow'/>)
            }
            else if(starValue%1===.5){
                star.push(<BsStarHalf/>);
                break;
            }
            else if(starValue!=i){
                star.push(<FaRegStar/>)
            }
        }
        return <div>{star}</div>   
    }
    return ( <div>
        <h2>Name : {props.name}</h2>
        <h2>Location : {props.location}</h2>
        <h2>Rating : {getStar(props.rating)}</h2>
        <h2>Feedback : {props.feedback}</h2>
        <button onClick={handleDeleteClick}>DELETE</button>

    </div> );
}
 
export default Cards;