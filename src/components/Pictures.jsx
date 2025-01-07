import React from 'react'
import "../styles/style.css"

const Pictures = ({img}) => {
  return (
    <div className='pictures'>
      <img  className = "images" src={img} alt="" />
    </div>
  )
}

export default Pictures