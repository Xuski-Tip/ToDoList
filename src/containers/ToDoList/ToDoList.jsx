import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ToDoList.module.scss';
import ToDoForm from '../../components/ToDoList/ToDoForm';
import ToDo from "../../components/ToDoList/ToDo"
const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=> {
        const saveLocaltodo = localStorage.getItem('todo')
        setTodos(JSON.parse(saveLocaltodo))
    }, [])
    useEffect(()=> {
        localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos])
    const addSearch = (searchInput) => {
        setSearch(searchInput)
    }
    const addTask = (userInput) => {
        if(userInput) {
            const  newitem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false,
                tags: false
            }   
            setTodos([...todos, newitem])
        }
    }
    const changeTags = (newTodos) => {
        setTodos(newTodos)
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) => (
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            ))
        ])
    }
    return (
        <> 
         <div className={styles.ToDoList}>
             <ToDoForm changeTags={changeTags} todos={todos} addSearch={addSearch} addTask={addTask}/>
             {todos.filter((val) => {
                 if(search == '') {
                     return val
                 }else if (val.task.toLowerCase().includes(search.toLowerCase())){
                     return val
                 }

             }).map((todo)=> {
                 return(
                    <ToDo
                    todos={todos}
                    todo={todo} 
                    setTodos={setTodos}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                 )
             })}
         </div>
        </>
    )
}



ToDoList.propTypes = {
    text: PropTypes.string,
}

export default ToDoList;