import './todo.css'
import Header from './Components/Header.js'
import deleteIcon from './Components/images/delete.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Todo(){

    const [ tasks , setTasks ] = useState([]);

    useEffect(() => {
        let tasksArr = JSON.parse(localStorage.getItem('tasks'));
        if(!tasksArr || tasksArr.length == 0){
            tasksArr = [{id: Date.now(), task: "Dummy"}]
        } else {
            setTasks(tasksArr);
        }
    },[])

    useEffect(() => {
        if(tasks.length > 0){
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }else {
            localStorage.removeItem('tasks'); // Clear local storage when all tasks are deleted
        }
    },[tasks])

    const addItem = () => {
        if(document.getElementById('input').value == '') return
        let newTask = { id: Date.now(), task: document.getElementById('input').value };
        let newTaskArr = [...tasks, newTask];
        document.getElementById('input').value = '';
        setTasks(newTaskArr);
    }

    const deleteItem = (index) => {
        let updatedTasks = tasks.filter((task) => task.id!==index )
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
    
    return (
        <div>
            <Header activeItem = 'todo'/>
            <div className='todo-parent-container'>
                <h1 className = "todo-heading todo-container">TODO APP</h1>
                <div className='todo-input-button todo-container'>
                    <input placeholder='Enter Task' className='todo-input' id='input'/>
                    <button className='todo-button' id='addBtn' onClick={addItem}>Add Task</button>
                </div>
                <ul className="todo-task todo-container">
                {
                    tasks.map((eachTask) => (
                        <li key = {eachTask.id} className='task'>
                            <h5 className='task-name'>{eachTask.task}</h5>
                            <button className='delete-btn' onClick={() => deleteItem(eachTask.id)}><img className='delete-icon' src = {deleteIcon}/></button>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}