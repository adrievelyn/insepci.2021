import React from 'react';
import './styles/home.css';
import Logo2 from './../images/logo-insepci-round.png';



class Home3 extends React.Component{
    render(){
        return(
            <nav>
            <div>
               <div className='logo3'>
                    <img className='logo-img3' src={Logo2}></img>

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



export default Home3;