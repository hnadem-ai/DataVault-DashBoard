import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import HomePage from './pages/App.js';
import Stats from './pages/stats.js'
import Todo from './pages/todo.js'
import reportWebVitals from './reportWebVitals';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<HomePage />}/> 
          <Route path='/stats' element = {<Stats />}/>
          <Route path='/todo' element = {<Todo />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
