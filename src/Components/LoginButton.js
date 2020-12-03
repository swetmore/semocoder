import React from 'react'
import { useAuth0} from '@auth0/auth0-react'
import "./Navbar.css";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
        <button className ="Login" onClick={() => loginWithRedirect()}>
            Log in
        </button>
        )
    )
}

export default LoginButton