import React, { useEffect, useState } from "react"
import Review from "./Review"
import ReviewForm from "./ReviewForm";
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

    function handleAddReview(newReview){
        setReview({...reviews, newReview})
    }

    const reviewList = reviews.map((review) => {
       return <Review key={review.id} review={review} />
    })

    
    return(
        <div>
        <ul>{reviewList}</ul>
        <ReviewForm onAddReview={handleAddReview} id={id}/>
        </div>
    )
}

export default ReviewList