import React from "react";
import { Input, Dropdown } from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";
import "./SignUp.scss";
import axios from 'axios';
import formNotValid from "../../utils/FormValidation";

function SignUp(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target.firstName.value + " " + e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
      position: e.target.position.value,
      linkedInUrl: e.target.linkedInUrl.value,
      resumeUrl: e.target.resumeUrl.value,
    }
    formNotValid(newUser) || (e.target.password.value !== e.target.confirmPassword.value) ? alert("Failed to upload, complete form correctly") : 
    axios.post('http://localhost:5050/users', newUser)
  .then(res => {
      console.log(res)
      props.history.push('/login')
  })
  .catch((err) => {
        console.log(err);
      });
   // e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-new-warehouse form--signup">
        <section className="add-new-warehouse__container">
          <h2 className="add-new-warehouse__title">Sign Up</h2>
          <p className="add-new-warehouse__subtitle h4">Register to become part of the iN-JECT Community</p>
          <div className="add-new-warehouse__input">
            <Label title="First Name" />
            <Input name="firstName" />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="Last Name" />
            <Input name="lastName" />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="Email" />
            <Input name="email" />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="Phone" />
            <Input name="phone" />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="Position" />
            <Dropdown
              items={["Doctor", "Pharmacist", "Nurse", "Care giver"]}
              name="position"
            
            />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="Password" />
            <Input name="password" />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="Confirm Password" />
            <Input name="confirmPassword" />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="LinkedIn Url" />
            <Input name="linkedInUrl" />
          </div>
          <div className="add-new-warehouse__input">
            <Label title="Resume Link" />
            <Input name="resumeUrl" />
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
    </form>
  );
}

export default SignUp;
