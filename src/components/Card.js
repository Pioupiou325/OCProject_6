import React from 'react';
import logements from "../datas/logements.json"
const Card = () => {
   const list_logements = logements.map(logement =>logement);

   return (
      <div className='card'>
        <ul>
          {list_logements.map(logement => (
            <li  key={logement.id}>
                <div className='logement'>
                <img src={logement.cover} alt={'cover &{logement.id}'} />
                
                <p>{logement.title}</p>
                </div>
                
             </li>
             
          ))}
            
        </ul>
        
      </div>
   );
};

export default Card;