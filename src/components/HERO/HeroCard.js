
import {Link} from 'react-router-dom'
export const HeroCard = 
({id , superhero,publisher,alter_ego,first_appearance,characters}
    ) => {

const imagePatch= `/assets/${id}.jpg`
       
return (
    <div className='container'>

        

    <div className='row'>


        <div className="col-xsm-12 mt-5"> 
        
        <div className="card  animate__animated animate__fadeIn  animate__delay-0.7s " >
            
            <img src={imagePatch } className="card-img p-4 " alt={superhero}/>
            
        
    
            <div className="card-body">
                <h5 className="card-title"> {superhero}</h5>
                <p className="card-text">{alter_ego} </p>
                { 
                (alter_ego !== characters) &&  <p className="text-muted">{characters} </p>
                }
             
             <p className="card-text">
                 <small className='text-muted'>   
                    {first_appearance}
                 </small>
             </p>
             <Link to={`/hero/${id}`}>
                 Mas... 
             </Link>
            
    
    
            
            
        </div>
    
        
    
        </div>
        
        </div >
    </div>
    </div>
    )

}