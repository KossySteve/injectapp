import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import formNotValid from "../../utils/FormValidation";
import { Link } from "react-router-dom";
import './Login.scss'

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      position: e.target.position.value,
      confirmPassword: e.target.confirmPassword.value,
      resume: e.target.resume.value,
    };
    formNotValid(newUser)
      ? alert("Failed to upload, complete form")
      : // api
        //   .addWarehouse(newUser)
        //   .then((res) => {
        //     console.log(res.data);
        //     history.push(`/login/${res.data.id}`);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-new-warehouse">
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
