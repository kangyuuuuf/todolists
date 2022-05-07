import React from "react";

const Todos = ({todos,deleteTodo, handleinfo}) => {
    const TodoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item center" key={todo.id}>
                    <span className="center" onClick={() => handleinfo(todo.content, todo.description)}>{todo.content}</span>
                    <a class="btn-floating btn-small waves-effect waves-light blue" onClick={() => deleteTodo(todo.id)}><i class="material-icons">delete</i></a>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )
    return(
        <div className="todos collection">
        {TodoList}
        </div>
    )
}

export default Todos;