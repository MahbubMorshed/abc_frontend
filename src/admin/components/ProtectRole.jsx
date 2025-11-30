import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import storeContext from "../../context/storeContext";

export default function ProtectRole({ role }) {
  const { store } = useContext(storeContext);

  if (!store?.userInfo?.role) {
    return <Navigate to="/admin/login" replace />;
  }

  // admin-only routes
  if (role && store.userInfo.role !== role) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
