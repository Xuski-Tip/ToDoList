import { useState } from "react";
import cn from "classnames"
import PropTypes from 'prop-types';
import styles from './ToDo.module.scss';
import trash from "./img/trash.png"
import edit from "./img/edit-text.png"
const ToDo = ({  todos, todo, toggleTask, removeTask, setTodos}) => {
    const [newInput, setNewInput ] = useState(false)
    const [value, setValue] = useState('')
    const reName = (id, title)=> {
        setValue(title)
        setNewInput(id)

    }
    function  saveRename(id) {
        const array = [...todos.map(item => {
            if(item.id == id) {
                item.task = value
            }else {
                return item
            }
        })]
        setTodos([...todos], array)
        setNewInput(null)
    }
    return (
        <div className={styles.item__todo} key={todo.id}>
            {
                newInput == todo.id ?
                <div></div>
                :
                <img alt='rename' onClick={() => reName(todo.id, todo.task)} src={edit} className={styles.item__delete}>
                
                </img> 

            }
            {
                newInput == todo.id ? 
                <form>
                    <input className={styles.tags} onChange={(e) => setValue(e.target.value)} value={value}></input>
                </form>
                :
                <div
                className={todo.complete ? cn(styles.item__text, styles.strike ) : styles.item__text}
                onClick={()=>toggleTask(todo.id)}
                >
                {todo.task}
                </div>                
            }

            {
                newInput == todo.id ?
                    <div>
                        <button onClick={() => saveRename(todo.id, todo.task )}>Сохранить</button>
                    </div>
                    :
                    <div>
                        <img alt='delete' src={trash} className={styles.item__delete} onClick={() => removeTask(todo.id)}>
                        </img>
                    </div>
            }
        </div>
    )
}



ToDo.propTypes = {
    searchInput: PropTypes.string,
    toggleTask: PropTypes.func,
    removeTask: PropTypes.func,
    todo: PropTypes.object,
    setTodos: PropTypes.func
}

export default ToDo;