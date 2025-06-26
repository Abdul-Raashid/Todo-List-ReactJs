import styles from './todositem.module.css';
export default function TodosItem({item, todos, setTodos}){
    function handleDelete(item){
        console.log("Delete Item Clicked for item ",item);
        setTodos(todos.filter((todo)=>todo!==item));
    }

    function handleClick(name){
        const newArray=todos.map((todo)=>
            todo.name===name?{...todo, done:!todo.done}:todo);
        setTodos(newArray);
    }
    const className=item.done?styles.completed:"";
    
    
    return(
        <div className={styles.item}>
            <div>
                <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>
                    X
                </button>
            </span>
            </div>
        </div>
    );
}