import React from 'react'
import Bike from './Bike'
import PetrolPump from './PetrolPump'

const HOC = () => {
  return (
    <div>
       <PetrolPump>
             <Bike name="H2R"/>
              
       </PetrolPump>
       <PetrolPump>
        <Bike name="splender"/>
       </PetrolPump>
      
       
        
    </div>
  )
}

export default HOC