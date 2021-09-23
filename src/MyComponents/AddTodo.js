import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can not be Blank.")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }


    }
    return (
        <div>
            <div className="container">
                <h3 className="my-2">Add a Todo :-</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" autocomplete="off" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" autocomplete="off" className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="desc" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
