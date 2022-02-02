import React from "react";

export const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>
            <div>
                <input type={"checkbox"}/>
            </div>
            <div>
                <button>
                    Log In
                </button>
            </div>
        </form>
    )
}

const Login = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
}
export default Login;