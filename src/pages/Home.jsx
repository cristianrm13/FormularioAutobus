import { Link } from "react-router-dom";
import LoginS from "../components/atoms/LoginS";

function Home(){
    return(
        <>
        <LoginS/>
        <Link to="/Login">Iniciar Sesion</Link>
        </>
    )
}

export default Home;