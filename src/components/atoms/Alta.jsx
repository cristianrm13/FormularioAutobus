import { useRef } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/mexico-1.svg";
import '../../assets/styles/FormAlta.css'

  function Alta() {
    const [selectedOption, setSelectedOption] = useState("Turismo");
    const [license, setLicense] = useState(Math.floor(Math.random() * 100000));
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

    const navigate = useNavigate();

    const formDataF = useRef();
    const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataF.current);
    let URI = "http://34.225.239.102/api/autobus/register";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: formData.get("clave"),
        placa: formData.get("placa"),
        numasientos: formData.get("asientos"),
        fecha: formData.get("fecha"),
        tipo: formData.get("tipo"),
        nombre: formData.get("chofer"),
        licencia: license,
      }),
    };
    console.log(options.body)
    fetch(URI, options)
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
      });
  };

  return (
    <div className="formPadre">
      <div className="formBus">
        <div className="imgAlta">
          <img src={Logo} alt="Logo" height="100px" />
        </div>

        <form ref={formDataF}>
          <div className="fmAlta">
            <div className="Column">
              <label className="cap" htmlFor="clave">
                clave autobus
              </label>
              <input type="text" id="clave" name="clave" className="inp" />{" "}
              <label className="cap" htmlFor="placa">
                placa
              </label>
              <input type="text" id="placa" name="placa" className="inp" />{" "}
            </div>
            <div className="Column">
              <label className="cap" htmlFor="asientos">
                numero de asientos
              </label>
              <input
                type="number"
                id="asientos"
                name="asientos"
                className="inp"
              />
              <label className="cap">
                fecha de alta
                <input type="Date" id="fecha" name="fecha" className="inp" />
              </label>
            </div>
          </div>
          <div className="Column2">
            <label className="cap" htmlFor="tipo">
              Tipo
              <select
                value={selectedOption}
                onChange={handleChange}
                id="tipo"
                name="tipo"
                className="inp"
              >
                <option value="Turismo">Turismo</option>
                <option value="Lujo">Lujo</option>
              </select>
            </label>
            <label className="cap">
              Nombre del chofer
              <input type="text" id="chofer" name="chofer" className="inp" />
            </label>
            <label className="cap" id="licencia">
              Número de licencia:
              <input name="licencia" value={license} disabled className="inp"></input>
            </label>
          </div>
          <div className="boton">
            <button onClick={handlerClick}>Registro</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Alta;
