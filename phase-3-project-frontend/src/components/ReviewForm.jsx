import React,{useState} from "react"



function ReviewForm({onAddReview, id}){
    const [formData, setFormData]= useState({
        rating:"",
        content:""

    })

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(){
        const newReview = {
            rating: formData.rating,
            content: formData.content,
            activity_id: id
        }
        console.log(newReview)
        fetch("http://localhost:9292/newreview",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newReview),
        })
        .then((r) => r.json())
        .then(onAddReview)
    }

    return(
        <section>
            <h2>What are your thoughts?</h2>
            <form onSubmit={handleSubmit}>
                <h3>rating</h3>
                <input type="text"  name="rating" placeholder="rating" value={formData.rating} onChange ={handleChange}/>
                <h3>content</h3>
                <input type="text"  name="content" placeholder="content" value={formData.content} onChange ={handleChange}/>
                <button type="submit">add review</button>
            </form>
        </section>
    )

}

export default ReviewForm