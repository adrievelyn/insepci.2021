import React from 'react';
import './styles/home.css';
import Logo from './../images/logo-insepci.jpg';
import Logo2 from './../images/logo-insepci-round.png';
import Logo3 from './../images/logoInsepci.png';


class Home extends React.Component{
    render(){
        return(
            <nav>
            <div>
                <div className='banner' >
                    <img className='banner__logo-img' src={Logo}></img>
                    
                        <a href="#1">Nosotros</a>
                        <a href="#2">Servicios</a>
                        <a href="#3">Cursos</a>    
                        <a href="#2">Productos</a>
                        <a href="#3">Contáctanos</a> 
                </div>
            
                <div className='logo2'>
                    <img className='logo-img2' src={Logo}></img>

                    <a href="#1">Nosotros</a>
                        <a href="#2">Servicios</a>
                        <a href="#3">Cursos</a>    
                        <a href="#2">Productos</a>
                        <a href="#3">Contáctanos</a> 
                </div>

                <div className='logo3'>
                    <img className='logo-img3' src={Logo2}></img>

                    <a href="#1">Nosotros</a>
                        <a href="#2">Servicios</a>
                        <a href="#3">Cursos</a>    
                        <a href="#2">Productos</a>
                        <a href="#3">Contáctanos</a> 
                </div>

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



export default Home;