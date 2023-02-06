import { useState } from "react";

let arrayToDo = [<li key={0}> item 1</li>, <li key={1}>item 2</li>, <li key={2}> item 3</li>]

function ToDoList() {

    const [toDos, setToDos] = useState(arrayToDo);

    const addToDo = () => {
        let newArray = [...toDos, <li key={toDos.length}> item 1</li>];
        setToDos(newArray);
        console.log(toDos);
    }

    return (
        <div>
            <h1>To Do</h1>

            <div>
                <input type="text" />
                <br />
                <button onClick={addToDo}>Add item</button>
            </div>
            <ol>
                {toDos}
            </ol>
        </div>);
}

export default ToDoList;