import React from 'react'
import { NavLink } from 'react-router-dom'


const Creador = () => {
  return (
     
<footer class="credits-container">
    <div class="credits-content">
        <section class="profile-section">
            <div class="profile-text">
                <p class="dev-name">Desarrollado por <span>Kevin Andres Arevalo Buitrago</span></p>
                <p class="dev-description">
                   Desarrollador web enfocado en JavaScript, React, HTML, CSS y Node.js. Especializado
                   en consumo de APIs, interfaces dinámicas y proyectos interactivos. Apasionado por
                   crear experiencias funcionales, optimizadas y escalables, combinando diseño moderno
                   con lógica eficiente. 🚀
                </p>
            </div>
            
            <div class="social-links">
                <a href="https://www.tiktok.com/@kevin404dev?is_from_webapp=1&sender_device=pc" class="social-icon tiktok" title="TikTok"><span>TikTok</span></a>
                <a href="https://www.instagram.com/kevin_29a/" class="social-icon instagram" title="Instagram"><span>Instagram</span></a>
                <a href="#" class="social-icon github" title="GitHub"><span>GitHub</span></a>
                <a href="#" class="social-icon linkedin" title="LinkedIn"><span>LinkedIn</span></a>
            </div>
        </section>

        <hr class="separator"/>

        <div class="project-info">
            <div class="tech-stack">
                <h2>Stack Tecnológico</h2>
                <ul>
                    <li><strong>Framework:</strong> React.js</li>
                    <li><strong>Estilos:</strong> CSS3</li>
                    <li><strong>API:</strong> Rick & Morty API</li>
                </ul>
            </div>
            <p class="dev-year">© 2025 | Versión Multiversal 1.0</p>
            <p class="disclaimer">Los derechos de personajes pertenecen a Adult Swim.</p>
        </div>
        <div>
                    <ul className='posicionBoton'> 
                        <ol className='diseñoBoton'>
                            <NavLink to='/'>Inicio</NavLink>
                        </ol>
                        <ol className='diseñoBoton'>
                            <NavLink to='/Personajes' >Personajes</NavLink>
                        </ol> 
                    </ul>
                </div>
    </div>
</footer>

  )
}

export default Creador