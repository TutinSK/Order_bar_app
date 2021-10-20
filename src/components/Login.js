import { useState } from "react";
import "../assets/css/Login.css";
import "../assets/css/Base.css";
import validation from "./Validation";
import { useHistory } from "react-router-dom";

import GoogleLogin from 'react-google-login';

function Login() {
    let history = useHistory(); // hoc ve router
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });
    const [ggLogin, setGgLogin] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const authLogin = 'authLogin'
    const handleLoginUser = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }
    const [errors, setErrors] = useState({});
    const handleLoginForm = () => {
        
        if ((loginForm.userName === 'admin' && loginForm.password === 'admin')) {

            const authLogin = 'authLogin'
            localStorage.setItem(authLogin, JSON.stringify({ 'user': loginForm.userName, 'role': 2 }));
            history.push("/processpro");
        }
        else if ((loginForm.userName === 'user' && loginForm.password === 'user')) {

            localStorage.setItem(authLogin, JSON.stringify({ 'user': loginForm.userName, 'role': 1, 'id': '12345678' }));
            history.push("/");
        }

        if (loginForm.userName === '' || loginForm.password === '') { //Logical OR (||) - JavaScript | MDN
            
        }
        setErrors(validation(loginForm));
    }

    const responseGoogle = (response) => {
        //

        setGgLogin(response.ct.Ue)



    }
    if (ggLogin !== "") {
        localStorage.setItem(authLogin, JSON.stringify({ 'user': ggLogin, 'role': 1, 'id': '12345678' }));

        history.push("/");

    }
    const style = {
        witdh: "100%"
    }
    const handleClick = () => {
        history.push("/register")
    }
    return (
        <div className="login-container">
            <div className="login-auth-form form_login">
                <div className="text-top">
                    <h2>Beer Bar App</h2>
                </div>

                <form action="#">
                     <div className="login-switch_button">
                        <GoogleLogin
                            clientId="604619053334-rt7bdcivrc0rr1frosoa4foov74ovrp6.apps.googleusercontent.com"
                            buttonText="Đăng Nhập"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            className="custom-gg"   
                            style={style}

                        />
                        {/* <div className="login-btn_login"><button className="regis">Đăng Ký</button></div> */}
                        <div className="login-btn_or"> <span>Hoặc</span></div>
                    </div>
                    <div className="login-auth-form__form">
                        <div className="login-auth-form__group">
                            <input onChange={handleLoginUser} name="userName" type="text" 
                            className="auth-form__input" placeholder="Tên đăng nhập"
                            value={loginForm.userName} />
                        </div>
                        {errors.userName && <p className="validation__userName">{errors.userName}</p>}
                        <div className="login-auth-form__group">
                            <input onChange={handleLoginUser} name="password" 
                            type="password" className="auth-form__input" placeholder="Mật khẩu"
                            value={loginForm.password} />
                        </div>
                        {errors.password && <p className="validation__password">{errors.password}</p>}

                    </div>
                    <div className="login-regis-forget">
                        <button onClick={handleClick} className="register_on_login">Bạn chưa có tài khoản? Đăng ký ngay</button>
                        <button className="forget_password">Quên mật khẩu</button>
                    </div>

                    <div className="login-footer_btn">
                        <button onClick={handleLoginForm} className="login">Đăng Nhập</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;