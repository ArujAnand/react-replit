import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const Signup = () => {
    return (
            <div className="singup-form-container">
                <form className="signup-form">
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
                                <input id="email" className="form-control mb-3 col" type="email" placeholder="Email Address" required />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id="psw" class="form-control mb-3 col" type="text" placeholder="Password" required />
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                <button type="submit" class="btn btn-primary btn-block mb-3">Sign Up</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Already have an account! <label><Link className="log-in-link" to="/Login">Log In</Link></label>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
    )
}