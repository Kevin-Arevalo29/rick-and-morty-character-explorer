import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFounP = () => {
  return (
    <div className='error'>
      <div >
        <h1>ESTA PAGINA NO FUNCIONA </h1>
        <h2 className='em'> ❌:(👽</h2>
        </div>
        <ul>
          <ol className='diseñoBoton'>
            <NavLink to='/'>Inicio</NavLink>
          </ol>
          <ol className='diseñoBoton'>
            <NavLink to='./personajes'>Personajes</NavLink>
          </ol>
        </ul>
    </div>
  )
}

export default NotFounP