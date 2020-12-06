import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Both from '../Pages/Both';

const Auth = () => {

    const {isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <Both/>
        </div>
        )
    )
}

export default Auth;