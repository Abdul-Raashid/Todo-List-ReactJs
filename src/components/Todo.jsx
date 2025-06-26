import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    
    const[todos, setTodos]=useState([]);
    const Count=todos.filter((todo)=>todo.done).length;
    const totalTodos=todos.length;
    return(
        <div>
            <TodoForm todos={todos} setTodos={setTodos}/>
            
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer Count= {Count} totalTodos={totalTodos}/>
            
        </div>
    );
}