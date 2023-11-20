import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
            <div className="auth-form-container">
                <form className="login-form">
                    <table>
                        <tr>
                            <td>
                                <h1 class="text-center login-logo"><img src={logo} alt="logo of hospital" width="70" height="64" class="d-inline-block align-text-top"></img>Healthcare</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p id="invalid-msg"></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id="usrn" class="form-control mb-3 col" type="text" placeholder="Username" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id="psw" class="form-control mb-3 col" type="text" placeholder="Password" required />
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                <button type="submit" class="btn btn-primary btn-block mb-3">Log In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="text-right ml-5"><a class="ml-4 forgot-password-link" href="https://forgot.com">Forgot
                                    Password?</a></label>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Don't have an account! <label><Link className="sign-up-link" to="/signup" >Sign up here</Link></label> 
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
    )
}