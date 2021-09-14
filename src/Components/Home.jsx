import React from 'react';
import './styles/home.css';
import Logo from './../images/logo-insepci.jpg';


class Home extends React.Component{
    render(){
        return(
            <div>
            <div className='logo' >
                <img className='logo-img' src={Logo}></img>
            </div>
            
            <div>
            <img className='logo-img' src={Logo}></img>
            </div>
            </div>
            )
    }  
};



export default Home;