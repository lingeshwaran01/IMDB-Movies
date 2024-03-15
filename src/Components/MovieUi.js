// import React, { memo } from 'react'

 export const MovieUi = ({listMovies}) => {
 console.log(listMovies)

  return (
    <li className='movie'>
      <img  src={listMovies.Poster!='N/A'?listMovies.Poster:"https://cdn-icons-png.freepik.com/512/5519/5519632.png"}/> 
      <div className="card-content">
      <p>{listMovies.Type}</p>
        <p>{listMovies.Title}</p>
      </div>
    
      
    </li>
 
  )
}
