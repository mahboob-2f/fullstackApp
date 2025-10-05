import { use } from 'react'
import './App.css' 
import { useState } from 'react'

function App() {

  const [jokes,setJokes]= useState([]);

  return (
    <>
      <p>hello ghost</p>
      <div>
          <h1>Jokes: {jokes.length}</h1>
          <div>
            {
              jokes.map((joke)=>{
                <div key={joke.id}>
                  <h2>{joke.title}</h2>
                  <p>{joke.content}</p>
                </div>
              })
            }
          </div>
      </div>
    </>
  )
}

export default App
