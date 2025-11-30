import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../../context/storeContext";

export default function ProtectDashboard() {
  const { store } = useContext(storeContext);

  if (!store?.token || !store?.userInfo) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
