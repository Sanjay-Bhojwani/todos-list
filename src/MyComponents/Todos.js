import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "40vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Todos List :-</h3>
            {/* {props.todos} */}
            {props.todos.length===0? <h6 className="text-danger">No Todos to Display.</h6>:
            props.todos.map((todo)=>{
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)})}
            
           
        </div>
    )
}
