import React from 'react';

function todos(props) {
    function Todo(props) {
        return (
            <div>
                <input type="checkbox"></input>
                <p>{props.description}</p>
                <button>edit</button>
                <button>delete</button>
            </div>
        )
    }
    const todos = props.descriptions.map(description =>
        <Todo description={description} key= {description}></Todo>
    )
    return (

        <div>
            {todos}
        </div>
    )

}

export default todos;