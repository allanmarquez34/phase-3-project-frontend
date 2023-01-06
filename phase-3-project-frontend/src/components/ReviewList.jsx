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
        <div class="flex-col mx-8 p-8">
            <div class="text-center font-Sacramento text-5xl bg-white opacity-60 text-black p-8 rounded-xl">
                <h1 class="text-center font-Sacramento text-5xl p-8">Reviews</h1>
            </div>
            <ul class="font-Courgette text-lg bg-black opacity-60 text-white p-4 rounded-xl space-y-6">{reviewList}</ul>
            <div>
                <ReviewForm onAddReview={handleAddReview} id={id}/>
            </div>
        </div>
    )
}

export default ReviewList