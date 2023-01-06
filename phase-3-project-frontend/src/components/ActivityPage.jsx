import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";


function ActivityPage(){
    const[activity, setActivity] = useState([])



    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/oneactivity/${id}`)
            .then((r) => r.json())
            .then(data => {
                setActivity(data)
                
            })
    }, [id])

    
       
  
    
    const {title, description, location, image } = activity



    return (
        
        <div>
            <ul>
                <img src={image}/>
                <li>{title}</li>
                <li>{location}</li>
                <li>{description}</li>
            </ul>
            <ReviewList/>
        </div>
    )

}

export default ActivityPage 