
import { useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const [exist, setexist] = useState(false)



 const {heroeId}=useParams();
 
 const heroe=getHeroById(heroeId);
 
 const navigate= useNavigate();

 useMemo (()=>getHeroById(heroeId),[heroeId])

 if (!heroe) {
   return <Navigate to ='/'/>}

  const handleReturn= ()=>{
    setexist (!exist)
    
   setTimeout(() => {
    navigate(-1)
   }, 800);
    
    
    }

  

 
  return (
    <div className={`row mt-5 animate__animated animate__fadeInLeft ${exist? "animate__animated animate__fadeOutLeft":""}`}>
      <div className="col-4" >
       <img src={`/assets/${heroe.id}.jpg` } className="img-thumbnail" alt={heroe.superhero}/>

      </div>
      <div className='col-8  '> 
      <h3> {heroe.superhero}</h3>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'><b>Alter ego:</b> {heroe.alter_ego}</li>
        <li className='list-group-item'><b>Publisher:</b> {heroe.publisher}</li>
        <li className='list-group-item'><b>first_appearance:</b>  {heroe.first_appearance}</li>

      </ul>
      <br/>
      <h5 className='mt-3'>characters:</h5>
      <br/>
      <p>{heroe.characters}</p>

      <button
      className='btn btn-outline-info  '
      onClick={handleReturn}>
        Return</button>

      </div>

    </div>
  )
}
