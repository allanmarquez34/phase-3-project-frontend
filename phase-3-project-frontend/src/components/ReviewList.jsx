import React, { useEffect, useState } from "react"
import Review from "./Review"
import {  useParams } from "react-router-dom";



function ReviewList(){
    const [reviews, setReview] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/review/${id}`)
        .then((r) => r.json())
        .then((data) => {
            setReview(data)
        })
    }, [])

    const reviewList = reviews.map((review) => {
       return <Review key={review.id} review={review}/>
    })

    
    return(
        <ul>{reviewList}</ul>
    )
}

export default ReviewList