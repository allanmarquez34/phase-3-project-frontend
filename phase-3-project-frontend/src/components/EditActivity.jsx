import React from "react "
import {  useParams, useHistory } from "react-router-dom";

function EditActivity({activities, onChangeForm, onEditActivity}){
    const history = useHistory()
    const {id} = useParams()

    function handleChange(event) {
        onChangeForm(event.target.name, event.target.value);
      }

      function handleSubmit(event) {
        event.preventDefault();
        fetch(` http://localhost:9292/edit/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(activities),
        },)
            .then((r) => r.json())
            .then(onEditActivity);
            history.push("/activities")
        }

        if (!activities) return null;

        return(
            <section>
                <form onSubmit={handleSubmit} autoComplete={"off"}>
                    <h3>Edit Activity</h3>
                    <label>Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={activities.title}
                            onChange={handleChange}
                        />

                    <label>location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={activities.location}
                            onChange={handleChange}
                        />

                    <label>Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={activities.description}
                            onChange={handleChange}
                        />
                    <label>Image</label>
                        <input
                            type="link"
                            id="image"
                            name="image"
                            value={activities.image}
                            onChange={handleChange}
                        />
                        <button type="submit" >Update Activity</button>
                </form>
            </section>
        )
}

export default EditActivity