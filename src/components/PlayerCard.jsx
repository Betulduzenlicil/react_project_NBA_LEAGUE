import React,{useState} from 'react'

const PlayerCard = ({data}) => {
    const [first, setFirst] = useState(true)
    const handleClick=()=>{
      setFirst(!first)
    }
  return (
      <div className='card'onClick={handleClick}  >
     {first?
      <div>
        <img src={data.img} alt="" />
        <h3>{data.name}</h3>
     </div>
     : <div className='arka-card'>
        {(data.statistics).map(s=>(<p>🏅{s}</p>))}
        <h3>{data.name}</h3>
       
     </div>}
      

  </div>  
)}

export default PlayerCard


