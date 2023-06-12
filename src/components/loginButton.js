import React from "react";
import { useRoutes } from "react-router-dom";

function LoginButton() {
    const history = useRoutes();

    function handleClick() {
        history.push("/orders");
    }

    return (
        <button onClick={handleClick}>LogIn</button>
    );
}

export default LoginButton;