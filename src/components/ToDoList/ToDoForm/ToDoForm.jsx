import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ToDoForm.module.scss';
const ToDoForm = ({ changeTags, todos,addTask, addSearch}) => {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        e.preventDefault()
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handlSearchAllTags = (e) => {
        e.preventDefault()
        let newTags = todos.forEach(item => {
            if(item.task == '#') {
                item.tags = true
            }else {
                return item
            }
        })
        changeTags(newTags)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        addSearch(userInput)    
    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <div>
        <form>
            <input 
            className={styles.form__input}
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Just do it!"
            />
            <button onClick={handleSubmit} className={styles.form__button}>
                Сохранить
            </button>
            <button onClick={handleSearch} className={styles.form__button}>
                Поиск
            </button>
        </form>
        </div>

    )
}



ToDoForm.propTypes = {
    todos: PropTypes.array,
    changeTags: PropTypes.func,
    addSearch: PropTypes.func,
    searchInputAdd: PropTypes.func,
    addTask: PropTypes.func,
}

export default ToDoForm;