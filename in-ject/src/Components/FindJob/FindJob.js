import React, { Component } from 'react'
import axios from 'axios';
import Button from "../Button/Button";
import Input, { Dropdown, Textarea } from "../Input/Input";
import Label from "../Label/Label";
import formNotValid from "../../utils/FormValidation";
import "./FindJob.scss";
import { Link } from "react-router-dom";



export class FindJob extends Component {
  state = {
    jobs: [],
    isLoading: true,
  };
  submitJobApplication = (id)=> {
    //post request for job application using {jobId : id , userId : userInfo.id}
            axios
              .post("http://localhost:5050/jobs/apply", {jobId: id, userId: this.props.userInfo.id})
              .then((res) => {
                console.log(res);
               //alert('You have submitted an application for this job');
              })
              .catch((err) => {
                console.log(err);
              });
      };

  componentDidMount() {
    console.log(this.props.userInfo)
        axios
            .get(`http://localhost:5050/jobs/position/${this.props.userInfo.position}`)
            .then((res) => {
              console.log(this.props.userInfo.position);
              this.setState({jobs: res.data,isLoading: false});
            })
            .catch((err) => {console.log(err)});
  }

  render() {
    
    return (this.state.isLoading ? (
      <div>Jobs are Loading...</div>
    ) : (
      <div className="dashboard__main-jobs">
        {this.state.jobs.map((job)=>
           <div className="dashboard__main-card">
           <div>
             <h4 className="dashboard__main-heading">Job description</h4>
             <h3 className="dashboard__main-text">{`${job.position} is required from the`} <br/> {`${job.startDate } to ${job.endDate }`}</h3>
             <h3 className="dashboard__main-text">{`${job.description} at`}</h3>
             <h3 className="dashboard__main-text" onClick={(e) => window.open(`${job.website}`)}><Link>{` ${job.company}`}</Link></h3>
             <h4 className="dashboard__main-heading">Contact</h4>
             <h3 className="dashboard__main-text">{`email: ${job.email} or call: ${job.phone}`}</h3>
             <h4 className="dashboard__main-heading">Location</h4>
             <h3 className="dashboard__main-text">{`${job.address}`}</h3>
             <h4 className="dashboard__main-heading">Pay</h4>
             <h3 className="dashboard__main-text">{`${job.pay}`}</h3>
           
           </div>
           <div>
             <Button title="Apply" onClick={this.submitJobApplication(job.id)} />
           </div>
         </div>
        
        )
        }
      </div>
    )
    )
  }
}



export default FindJob;
