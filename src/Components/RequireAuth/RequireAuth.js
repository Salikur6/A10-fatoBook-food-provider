import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';

const RequireAuth = ({ children }) => {
    let location = useLocation();

    if (auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    };
    return children

}
export default RequireAuth;