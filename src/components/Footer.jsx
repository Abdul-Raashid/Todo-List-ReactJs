import styles from './footer.module.css'
export default function Footer({Count,totalTodos}){
    return(
        <div className={styles.footer}>
            <span className={styles.item}>
                Completed Todos: {Count}
            </span>
            <br></br>
            <span className={styles.item}>
                Total Todos: {totalTodos}
            </span>
        </div>
    );

}