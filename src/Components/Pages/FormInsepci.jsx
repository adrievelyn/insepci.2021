import React from 'react';
import '../styles/formInsepci.css';


class FormInsepci extends React.Component{
    render(){
        return(
          
            <div>
            <form id='form' action="" method="" className='form'>
            <h2 id='3' className='form-title'>Formulario de Atención</h2>
            <p className='form-subtitle'>Para agendar Inspección, solicitar cotización y/ó realizar alguna consulta, puede enviarnos el formulario y le contáctaremos.</p>
                <label for="form-name"> Nombre de Empresa o Particular
                    <input required name="name" id="form-name" type="text" placeholder="" autocomplete='on'></input>
                </label>
                <label for="form-email"> Correo Electrónico
                    <input required name="email" id="form-name" type="email" placeholder="" autocomplete='on'></input>
                </label>
                <label for="form-number"> Número de Teléfono
                    <input required number="number" id="form-number" type="number" placeholder="" autocomplete='on'></input>
                </label>
                <label for="form-message"> Mensaje
                <textarea required name="message" placeholder="" id="form-message" cols="30" rows="7"></textarea>
                </label>
                <button class="form-button" type="submit">ENVIAR MENSAJE</button>
            </form>
            <a href="mailto:inversiones.s.p.c.i.2021@gmail.com" id='sendMsg'></a>

            </div>
         
        
       

        )
    }

    }


export default FormInsepci;