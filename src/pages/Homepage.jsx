import React from 'react'
import data from "../helper/data"
import Pictures from '../components/Pictures'
import "../styles/style.css"


const Homepage = ({name}) => {
  return (
    <div className='home'>

   {data.map((item,index)=>(
    <Pictures
     key={index}
      img={item.src.large}  
     name = {item.photographer}
    />

  


   ))}
     
    </div>
  )
}

export default Homepage