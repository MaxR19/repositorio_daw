import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import {AppRoot} from './App.jsx'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

import Task from './task.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

// React va a renderizar siempre un único elemento y ya dentro de ese elemento,
// podremos añadir 

root.render(
<>
  <div className='App'>
    <TwitterFollowCard name={"Max Rockx"} userName={"maxrockx"}/>
    <TwitterFollowCard name={"Watchs"} userName={"watchs"}/>
    <TwitterFollowCard name={"NightOwl"} userName={"nightowl"}/>
  
    <Task name={"Recoger NIE"} status={"completada"} owner={"John"}/>
    <Task name={"Limpiar cocina"} status={"pendiente"} owner={"John"}/>
    <Task name={"Tomar pastilla roja"} status={"completada"} owner={"John"}/>
  </div>
</>
)


/* <div>
        <h3>Tarea</h3>
        <p>Estado: <strong>completada</strong></p>
        <p>Responsable: Cucu</p> */