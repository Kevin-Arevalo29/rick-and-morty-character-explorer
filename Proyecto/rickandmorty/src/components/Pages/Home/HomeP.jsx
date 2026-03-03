import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeP = () => {
  return (
    <div>
        <h1 className='title1'>Bienvenidos a la Pagina de Rick And Morty</h1>
        <h3 className='subtitulo'>Enlaces rapidos</h3>

        <div>
            <ul>
                
                <ol className='diseñoBoton'>
                    <NavLink to='./Personajes' className={({isActive})=>(isActive ? 'active': '')}>Personajes</NavLink>
                </ol>
                <ol className='diseñoBoton'>
                    <NavLink to='/Creador' className={({isActive})=>(isActive ? 'active': '')}>Creador</NavLink>
                </ol> 
            </ul>
        </div>
    </div>
  )
}

export default HomeP