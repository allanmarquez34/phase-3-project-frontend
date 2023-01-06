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
        
        <div class="flex space-x-8">
            <div class="flex-col max-w-md">
                <div class="justify-center items-center place-content-center place-items-center">
                    <img src={image} class="shadow rounded-full max-w-[400px] h-[300px] align-middle border-none"/>
                </div>
                <br></br>
                <div class="justify-center items-center place-content-center place-items-center bg-white rounded-xl opacity-60">
                    <p class="font-Sacramento text-5xl text-center text-black">{title}</p>
                    <p class="font-PassionsConflict text-3xl text-center text-black">{location}</p>
                    <p class="font-BreeSerif text-xl text-center text-black">{description}</p>
                </div>
            </div>
            <div class="flex">
                <ReviewList/>
            </div>
        </div>
    )
}

export default ActivityPage 