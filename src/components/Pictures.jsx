import React from 'react'
import "../styles/style.css"

const Pictures = ({img,name}) => {
  return (
    <>
    <div className='pictures' >
    
   <img  className = "images" src={img} alt="" />
   <div className="photographer-name">{name}</div>
   
    </div>

    
    </>

  )
}

export default Pictures