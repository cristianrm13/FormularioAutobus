import {useState} from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/img/mexico-1.svg"
import '../../assets/styles/Login.css'

function LoginS() {
    const [stateForm,setStateForm]=useState('')
    const handlerClick=(e)=>{
        e.preventDefault()
        setDescription({msn:username})
    }
    const handlerChange=(e)=>{
        setStateForm({...stateForm,username: e.target.value})
    }
    const handlerChangePassword=(e)=>{
        setStateForm({...stateForm,password: e.target.value})
    }
    
    return (
      <form>
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
                onChange={handlerChange}
                placeholder="usuario"
              />
              <label className="caption" htmlFor="pass">
                password
              </label>
              <input
                type="password"
                value={stateForm.password}
                onChange={handlerChangePassword}
                placeholder="contraseña"
              />
              <br></br>
            </div>
            <div className="botonLogin">
              <button onClick={handlerClick}>Iniciar Sesion</button>
              <br />

              <Link to="/Register">
                <button>Regitrarme</button>
              </Link>
            </div>
            <div>
              <label>{JSON.stringify(stateForm)}</label>
            </div>
          </div>
        </div>
      </form>
    );
}

export default LoginS;