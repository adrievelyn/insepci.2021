import React from 'react';
import './styles/home.css';
import Logo from './../images/logo-insepci.jpg';
import Logo2 from './../images/logo-insepci-round.png';
import Logo3 from './../images/logoInsepci.png';


class Home extends React.Component{
    render(){
        return(
            <div>
            <div className='logo' >
                <img className='logo-img' src={Logo}></img>
            </div>
            
            <div className='logo2'>
            <img className='logo-img2' src={Logo}></img>
            </div>

            <div className='logo3'>
            <img className='logo-img3' src={Logo2}></img>
            </div>

            <div className='logo4'>
            <img className='logo-img4' src={Logo3}></img>
            </div>
            </div>

            
            )
    }  
};



export default Home;