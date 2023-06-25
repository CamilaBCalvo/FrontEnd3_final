import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'

const Contacto = () => {
 const {themeState} = useGlobalStates()
  return (
    
    <div  className= {themeState.className}  >
     <div className='contact'>
       <h1>¡CONTÁCTENOS!</h1>
      <h2>¿Esta usted interesado en saber más?</h2>
      <p>Envíe sus consultas y nos pondremos en contacto 📧 </p>
      <span></span>
    </div>
      <Form/>
    </div>
  )
}

export default Contacto