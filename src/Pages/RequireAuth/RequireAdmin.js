import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../useAdmin/useAdmin";
import auth from '../../firebase.init';
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


export const RequireAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>;
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return <Outlet />;
};