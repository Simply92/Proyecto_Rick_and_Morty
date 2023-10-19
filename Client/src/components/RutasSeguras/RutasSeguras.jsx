import { Navigate, Outlet } from "react-router-dom";

const RutasSeguras = ({access}) => {
 return(
    access ? <Outlet/> : <Navigate to= "/"/>
 )
}

export default RutasSeguras;


