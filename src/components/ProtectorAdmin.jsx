import { Navigate, Outlet } from "react-router";

// Componente que protege las rutas de administrador

const ProtectorAdmin = ({ adminUser }) => {
  if (!adminUser) {
    return <Navigate to={"/"}></Navigate>;
  }
   return <Outlet></Outlet>;
};

export default ProtectorAdmin;
