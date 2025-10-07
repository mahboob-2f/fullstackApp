import { use } from 'react'
import './App.css' 
import { useState , useEffect } from 'react'
import axios from 'axios'


function App() {

  const [jokes,setJokes]= useState([]);
  
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
      // console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  },[])
 
  return (
    <>
      <h1>hello ghost</h1>
      <div>
          <h2>Jokes: {jokes.length}</h2>
          <div>
            {
              jokes.map((joke)=>(
                  <div key={joke.id}>
                  <h2>{joke.title}</h2>
                  <p>{joke.content}</p>
                </div>
                
              ))
            }
          </div>
      </div>
    </>
  )
}

export default App
