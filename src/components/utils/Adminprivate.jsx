import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const Adminprivate = () => {
  const auth = useSelector((state) => state.authSlice.profile);

  return auth ? (
    auth.role === "admin" ? (
      <Outlet />
    ) : (
      <Navigate to="/homePage" />
    )
  ) : (
    <Navigate to="/" />
  );
};

export default Adminprivate;
