import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Coder from '../Pages/Coder';
const Auth = () => {

    const {user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <Coder/>
        </div>
        )
    )
}

export default Auth;