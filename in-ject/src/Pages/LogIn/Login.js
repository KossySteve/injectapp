import React from "react";
import { Input, Dropdown } from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";
import axios from 'axios';
import formNotValid from "../../utils/FormValidation"
import { Link } from "react-router-dom";
import './Login.scss';

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();

    let user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    formNotValid(user)
      ? alert("Failed to upload, complete form")
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
      <div className="add-new-warehouse form--login">
        <section className="add-new-warehouse__container">
          <h2 className="add-new-warehouse__subtitles">Login Up</h2>

          <div className="add-new-warehouse__input">
            <Label title="Email" />
            <Input name="email" placeholder="" />
          </div>

          <div className="add-new-warehouse__input">
            <Label title="Password" />
            <Input name="password" placeholder="" />
          </div>
        </section>
      </div>
      <div className="add-new-warehouse__button-box">
        <div className="add-new-warehouse__button-left">
          <Button title="Cancel" />
        </div>
        <div className="add-new-warehouse__button-right">
          <Button title="Submit" />
        </div>
      </div>
      <div className="signup-instruction">
        <h4>If you don't have an account, please <Link to="/register"> SignUp</Link></h4>
        
      </div>
    </form>
  );
}

export default Login;
