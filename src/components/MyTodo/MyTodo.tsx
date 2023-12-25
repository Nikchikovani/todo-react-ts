import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


interface Todo{
    title: string;
    id: string;
}

export function MyTodo(){
    const [title, setTitle] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    function createTodos(){
        const newTodos: Todo[] = [...todos, {title, id: uuidv4()}]
        setTodos(newTodos);

        console.log(todos);        
    }

    function deleteTodo(todoId: string){
        const updateTodo = todos.filter((todo) => todo.id !== todoId);
        setTodos(updateTodo);
    }
    


    return(
        <>
            <input 
            type="text" 
            placeholder="Enter your todo" 
            value={title}
            onChange={(event) =>  setTitle(event.target.value)}
            />
            <button onClick={createTodos} >submite</button>
            <div>
                <ul>
                {todos.map((todo) =>{
                    return( <div key={todo.id}>{todo.title} <button onClick={() => deleteTodo(todo.id)}>delete</button></div>)
                })}
                </ul>
                
            </div>
        </>
    )
}