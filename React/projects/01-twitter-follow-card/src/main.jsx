import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import {AppRoot} from './App.jsx'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

//import Task from './task.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

// Ejemplod e función que podemos pasarle como prop
// const format = (userName) => {return `@${userName}`}

// React va a renderizar siempre un único elemento y ya dentro de ese elemento,
// podremos añadir 

/* <TwitterFollowCard name={"Max Rockx"} userName={"maxrockx"} initialisFollowing={true}/>
    <TwitterFollowCard name={"Watchs"} userName={"watchs"} initialisFollowing={true}/>
    <TwitterFollowCard name={"BruceLee"} userName={"brucelee"} initialisFollowing={true}/>
*/


/* users.forEach((user) =>
  {
    return (
      <TwitterFollowCard 
        name={user.name} 
        userName={user.userName} 
        initialisFollowing={user.isFollowing}
      />
    );
  })
*/


const users = [
  {
    id: 1,
    name: "Sharik",
    userName: "sharik",
    isFollowing: false
  },
  {
    id: 2,
    name: "Tony",
    userName: "tony",
    isFollowing: true
  },
  {
    id: 3,
    name: "David",
    userName: "david",
    isFollowing: false
  },
  {
    id: 4,
    name: "Jia",
    userName: "jia",
    isFollowing: true
  }
]

root.render(
<>
  <div className='App'>
    {
      users.map(user => {
        const{id, userName, name, isFollowing} = user;

        return (
          <TwitterFollowCard 
          key={id}  
          name={name} 
            userName={userName} 
            initialisFollowing={isFollowing}
          />
        )
      })
    }
  </div>
</>
)


/* <div>
        <h3>Tarea</h3>
        <p>Estado: <strong>completada</strong></p>
        <p>Responsable: Cucu</p> */