import React from 'react';
import './styles/home.css';
import Logo from './../images/logo-insepci.jpg';



class Home2 extends React.Component{
    render(){
        return(
            <nav>
            <div> 
                <div className='logo2'>
                    <img className='logo-img2' src={Logo}></img>

                    <a href="#1">Nosotros</a>
                        <a href="#2">Servicios</a>
                        <a href="#3">Cursos</a>    
                        <a href="#2">Productos</a>
                        <a href="#3">Contáctanos</a> 
                </div>

                
            </div>
            </nav>
            
            )
    }  
};



export default Home2;