import React, { useState } from 'react'
import './Star.css'

export default function StarRating() {
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);

  return (
    <div className='star'>
        <h1>Star ratings</h1>
       <div>
        {
            [1,2,3,4,5].map((num)=>
          
          <button 
          onClick={()=>setRating(num)}
          onMouseOver={()=>setHover(num)}
          onMouseLeave={()=>setHover(rating)}>
                <span className={
                    `stars ${num<=((rating && hover) || hover)
                    ?'on':'off'
                }`

                    }>&#9733;</span>
            </button>
          )}
       </div>
    </div>
  )
}
