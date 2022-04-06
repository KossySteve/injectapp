import React from "react";
import { Input } from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";
import axios from 'axios';
import formNotValid from "../../utils/FormValidation"
import { Link } from "react-router-dom";
import './Login.scss';
import Swal from "sweetalert2";

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();

    let user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    formNotValid(user)
      ? Swal.fire("Failed to upload, complete form")
      :  axios.post('http://localhost:5050/users/login', user)
        .then(res => {
            console.log(res);
            let token = res.data.token;
            sessionStorage.setItem('authToken', token);
            props.history.push('/');
            console.log('Hello');
        })
        .catch((err) => {console.log(err)});
       e.target.reset();
      
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form form--login">
        <section className="form__container">
          <h2 className="form__subtitles">Login Up</h2>

          <div className="form__input">
            <Label title="Email" />
            <Input type='email' name="email" placeholder="" />
          </div>

          <div className="form__input">
            <Label title="Password" />
            <Input type='password' name="password" placeholder="" />
          </div>
        </section>
      </div>
      <div className="form__button-box">
        <div className="form__button-left">
          <Button title="Cancel" />
        </div>
        <div className="form__button-right">
          <Button title="Submit" />
        </div>
      </div>
      <div className="signup-instruction">
        <h4>If you don't have an account, please <Link to="/signup"> SignUp</Link></h4>
        
      </div>
    </form>
  );
}

export default Login;
