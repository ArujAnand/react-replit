import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png";

function Login() {
    return (
        <div class="big" style={{ display: 'flex', justifyContent: 'center' }}>
                <form action="https://www.google.com" onsubmit="return validate()" class="form">
                    <table id="form-table" class="table mx-auto">
                        <tr>
                            <td>
                                <h1 class="text-center"><img src={logo} alt="logo of hospital" width="70" height="64" class="d-inline-block align-text-top"></img>Healthcare</h1>
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
                                <input id="psw" class="form-control mb-3" type="password" placeholder="Password" required />
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                <button type="submit" class="btn btn-primary btn-block mb-3">Log In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                     
                                {/* FORGOT Password needs to be implemented */}
                                <label class="text-right ml-5"><a class="ml-4" href="https://forgot.com">Forgot
                                    Password?</a></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                Don't have an account! <label><Link to="/Signup">Sign up here</Link></label>
                            </td>
                        </tr>
                    </table>
                </form>
                </div>
    );
}

export default Login;