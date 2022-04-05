import React from "react";
import Button from "../Button/Button";
import Input, { Dropdown, Textarea } from "../Input/Input";
import Label from "../Label/Label";
import formNotValid from "../../utils/FormValidation";
import './PostJob.scss'

function PostJob() {
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
        formNotValid(newUser) ? alert("Failed to upload, complete form") : 
        // api
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
    <div>
      <form onSubmit={submitHandler}>
        <div className="add-new-warehouse">
          <section className="add-new-warehouse__container">
            <h2 className="add-new-warehouse__title">Post A Job</h2>
            <p className="add-new-warehouse__subtitle h4">
              Submit a job and get professionals from the iN-JECT Community quickly
            </p>
            <div className="add-new-warehouse__input">
              <Label title="Company" />
              <Input name="company" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Location" />
              <Input name="location" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Start Date" />
              <Input name="startDate" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="End Date" />
              <Input name="endDate" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Position" />
              <Dropdown
                items={["Doctor", "Pharmacist", "Nurse", "Care giver"]}
                name="email"
                placeholder=""
              />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Pay" />
              <Input name="pay" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Job Description" />
              <Textarea name="description" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Job Email" />
              <Textarea name="email" placeholder="" />
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
    </div>
  );
}

export default PostJob;
