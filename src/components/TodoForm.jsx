import { useState } from "react";
import styles from './todoForm.module.css';
export default function TodoForm({todos,setTodos}){
    const[todo, setTodo]=useState({name:"", status:false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", status:false});
    }
    return(
        <div>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                <input className={styles.moderninput} onChange={(e)=>setTodo({name:e.target.value, done:false})} 
                value={todo.name} 
                type="text"
                placeholder="Enter Todo Item"/>
                

                <button className={styles.modernbutton} type="submit">
                    Add
                </button>
                </div>
            </form>
        </div>
    );
}