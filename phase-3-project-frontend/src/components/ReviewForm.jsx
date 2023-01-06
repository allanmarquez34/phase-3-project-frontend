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
        <section class="self-center text-center justify-center items-center origin-center place-items-center">
            <form onSubmit={handleSubmit} class="self-center text-center justify-center items-center origin-center place-items-center">
                <input class="font-BreeSerif text-xl text-center" type="text"  name="rating" placeholder="Rating" value={formData.rating} onChange ={handleChange}/>
                <br></br>
                <input class="font-BreeSerif text-xl text-center" type="text"  name="content" placeholder="Review" value={formData.content} onChange ={handleChange}/>
                <br></br>
                <button type="submit" class="text-center bg-white rounded font-Parisienne text-2xl border-black border-2">Add Review!</button>
            </form>
        </section>
    )
}

export default ReviewForm