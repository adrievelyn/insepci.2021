import React from 'react';
import './styles/home.css';
import './styles/typing-effect.css';
import Logo from './../images/logo-insepci.jpg';
import Logo2 from './../images/logoInsepci.png';
import Instagram from './../icons/instagram2.png';
import Phone from './../icons/phone3.png';
import Mail from './../icons/gmail.png';
import FormInsepci from './Pages/FormInsepci';
import ImgCenter from './../images/insepci-img.jpg';


class Home extends React.Component{
    render(){
        return(
            <div>
            <div>
                <div className='banner' >
                    <img className='banner__logo-img' src={Logo} alt='Logo'></img>
                    
                        <a href="#1">Nosotros</a>
                        <a href="/">Servicios</a>
                        <a href="/">Cursos</a>    
                        <a href="/">Productos</a>
                        <a href="#3">Contáctanos</a> 
                </div>
            </div>

            <div id='1' className='grettings'>
        <div className='grettings_typing-effect'>
            ¡Bienvenidos a INSEPCI 2021!
        </div>
        <h1>INVERSIONES EN SERVICIOS Y PREVENCIÓN CONTRA INCENDIOS</h1>
        </div>
        
        <div className='main-about'>
        <div>
            <img className='main-image-center' src={ImgCenter} alt='Imágen Central'></img>
        </div>
        <div>
        <h2 className='main__about-title'>NOSOTROS</h2>
        <p className='main__about-subtitle'>
        Somos una empresa con gran trayectoria en el mercado dedicada a prevenir, educar, informar y asesorar
        a los patronos y trabajadores en materia de Seguridad e Higiene Ocupacional en el ámbito laboral, con 
        el objetivo de disminuir riesgos y mejorar sus condiciones de trabajo y su seguridad laboral basándonos
        en las normas estipuladas en la Ley.<br></br><br></br>
        Nuestra amplia experiencia en tan imprescindible práctica dentro de toda Institución Laboral, como lo son
        la Higiene y Seguridad Industrial; nos permite garantizar calidad y confiabilidad en nuestro trabajo.
        </p>
        </div>
        </div>
                <div>
                <FormInsepci />
                </div>
           
            <div>
            <footer className='footer'>
            <img className='footer__logo-img2' src={Logo2}></img>
            <p className='footer__text'>Copyright: Insepci.2021. <br></br> Todos los derechos reservados.</p>
            
            <a href='https://instagram.com/@insepci2021?utm_medium=copy-link' target="_blank"><img className='footer__icon-instagram' src={Instagram}></img></a>
            <img className='footer__icon-phone' src={Phone}></img>
            <img className='footer__icon-mail' src={Mail}></img>

            <p className='footer__text2'>Dirección: Av. Miranda, Edificio Oficentro 13, 
            piso 03, oficina 03. <br></br> Guatire, Edo. Miranda, Municipio Zamora.
            </p>
        
            </footer>
            </div>
            </div>
            
            )
    }  
};



export default Home;