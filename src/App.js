import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {MovieUi }from './Components/MovieUi';
// import { update } from 'lodash';
function App() {
  const API_URL='https://www.omdbapi.com/?apikey=a337c871'
  const [listMovies,setMovies]=useState([])

  const searchMovie=async(title)=>{
    
    const response =await fetch(`${API_URL}&s=${title}`)
    const datas=await response.json()

    if(response.ok){
      if('Error' in datas){
        setMovies([])

      }else{
        setMovies([...datas.Search])

      }

    

    }else{
    setMovies([])

    }


  
  }
useEffect(()=>{
searchMovie('spiderman')
},[])

const [title,setTitle]=useState('spiderman')
  return (
    <div className="App">
    <div className='header'>
      <p id="logo">IMDB Movie</p>
      <div className='search'>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Search for Movies'></input>
        <svg onClick={e=>searchMovie(title)}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      </div>

    </div>
    <div >

    {listMovies.length!=0 &&
    <ul className='container'>
    {listMovies.map((e,index)=>  <MovieUi key={index} listMovies={e}/>)
    
    }
    </ul>
    }
    </div>
    </div>
  );
}

export default App;
