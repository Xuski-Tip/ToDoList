import styles from "./App.module.scss";
import ToDoList from "../ToDoList"
console.log();
const App = () => {
    return(
        <div className={styles.wrapper}>
        <ToDoList>

        </ToDoList>
        </div>
    )
}
export default App