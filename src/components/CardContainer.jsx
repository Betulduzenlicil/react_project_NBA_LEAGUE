import React ,{useState} from 'react'
import PlayerCard from './PlayerCard'
// import {data} from '../helper/data'


const CardContainer = ({data}) => {


  return (   
    <div className='cardContainer'>
      {data.map((item,index)=><PlayerCard key={index} data={item}  />)}
    </div>   

  
  


)   
}

export default CardContainer
