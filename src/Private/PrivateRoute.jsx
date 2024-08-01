import { useContext,} from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const pathname = useLocation().pathname;

  if(loading){
    return <span className="loading loading-spinner w-32 mx-auto"></span>
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={pathname} />;
};

export default PrivateRoute;
