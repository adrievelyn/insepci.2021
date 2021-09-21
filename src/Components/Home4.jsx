import React from 'react';
import './styles/home.css';
import Logo3 from './../images/logoInsepci.png';


class Home4 extends React.Component{
    render(){
        return(
            <nav>
            <div>
               <div className='logo4'>
                    <img className='logo-img4' src={Logo3}></img>

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



export default Home4;