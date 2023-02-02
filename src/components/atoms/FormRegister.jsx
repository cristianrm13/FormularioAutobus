/* import { Link } from "react-router-dom"; */
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/FormRegister.css'
import Logo from "../../assets/img/mexico-1.svg"

function FormRegister() {
    const navigate = useNavigate()


const formDataF = useRef();
const handlerClick = (e) => {
  e.preventDefault();
  const formData = new FormData(formDataF.current);
  let URI = "http://34.225.239.102/api/registrar/usuario";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
    {
  "nombre": formData.get("name"),
  "usuario": formData.get("username"),
  "correo": formData.get("email"),
  "contrasenia": formData.get("password")
}
    ),
  };
  console.log(options.body);
  fetch(URI, options)
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
    });
};

    return (
      <div className="formulario">
        <div className="form_Register">
          <div className="imgAlta">
            <img src={Logo} alt="Logo" height="100px" />
          </div>
          <form ref={formDataF}>
            <div className="Colm">
              <div className="text">
                <label className="caption" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="inp"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ejem: Cristian ramos"
                />
              </div>
              <div className="text">
                <label className="caption" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="inp"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="ejem: cristian@dominio.com"
                />
              </div>
              <div className="text">
                <label className="caption">Username</label>
                <input
                  className="inp"
                  type="text"
                  name="username"
                  placeholder="ejem: cristian13"
                />
              </div>
              <div className="text">
                <label className="caption" htmlFor="pass">
                  Password
                </label>
                <input
                  className="inp"
                  type="password"
                  id="pass"
                  name="password"
                />
              </div>
            </div>
            <div className="boton">
              <button onClick={handlerClick}>Registro</button>
              {/* <link to="/AltaProducto">Alta autobus</link> */}
            </div>
          </form>
        </div>
      </div>
    );
}

export default FormRegister;