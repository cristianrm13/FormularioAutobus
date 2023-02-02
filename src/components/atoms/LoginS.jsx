import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/mexico-1.svg"
import '../../assets/styles/Login.css'

function LoginS() {
    const [stateForm,setStateForm]=useState('')
    const navigate = useNavigate();
    const formDataF = useRef();
    const handlerClick = (e) => {
      e.preventDefault();
      const formData = new FormData(formDataF.current);
      let URI = "http://34.225.239.102/api/iniciar";
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: formData.get("username"),
          contrasenia: formData.get("password"),
        }),
      };
      console.log(options.body);
      fetch(URI, options)
        .then((response) => response.json())
        .then((data) => {
          alert(JSON.stringify(data));
        });
    };
    const navigateBus = useNavigate();
    const alta=(e)=>{
      e.preventDefault();
      navigateBus("/AltaProducto")        
    }
    
    return (
      <form ref={formDataF}>
        <div className="formulario">
          <div className="form_Login">
            <div className="imgAlta">
              <img src={Logo} alt="Logo" height="100px" />
            </div>
            <div className="Colm">
              <label className="caption" htmlFor="pass">
                Usuario
              </label>
              <input
                type="text"
                value={stateForm.username}
                placeholder="usuario"
                name="usuario"
                className="inp"
              />
              <label className="caption" htmlFor="pass">
                password
              </label>
              <input
                type="password"
                value={stateForm.password}
                placeholder="contraseña"
                name="password"
                className="inp"
              />
            </div>
            <div className="botonLogin">
              <Link to="/altaproducto">
                <button onClick={handlerClick}>Iniciar Sesion</button>
              </Link>
              <Link to="/Register">
                <button>Regitrarme</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
}

export default LoginS;