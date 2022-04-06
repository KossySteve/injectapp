import React, { Component } from "react";
import { withRouter } from "react-router";
import "./JobsByYou.scss";
import axios from "axios";
import Button from "../Button/Button";
import Table from "../Table/Table";

export class JobsByYou extends Component {
  state = {
    myJobs: [],
    isLoading: true,
    showApplicantTable: false,
    applicants: [],
    // jobforUpdate: {}
  };
  viewApplicants = (id) => {
    //get users applied to the job
    console.log("job id", id);
    axios
      .get(`http://localhost:5050/jobs/apply/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          applicants: res.data,
          showApplicantTable: !this.state.showApplicantTable,
        });
        console.log("applicants", this.state.applicants);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  updateJob = (job) => {
      //push to the job to UpdateJob Component to update job
    this.props.history.push("/dashboard/updatejob", [job]);
  };

  deleteJob = (id) => {
    //delete specific job
    console.log("job id", id);
    axios
      .get(`http://localhost:5050/jobs/apply/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          applicants: res.data,
          showApplicantTable: !this.state.showApplicantTable,
        });
        console.log("applicants", this.state.applicants);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  componentDidMount() {
    //console.log(this.props.userInfo.id);
    // get all jobs posted by user
    axios
      .get(`http://localhost:5050/jobs/${this.props.userInfo.id}`)
      .then((res) => {
        this.setState({ myJobs: res.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.isLoading ? (
      <div>Jobs are Loading...</div>
    ) : (
      <section>
        {this.state.myJobs.map((job, index) => (
          //include time of posting to database
          <div key={index} className="post">
            <h4 className="post__heading">
              {`${job.position}`} position{" "}
              <span>{`posted for ${job.startDate.substring(0, 10)}`}</span>
            </h4>
            <div className="post__btns">
              <Button
                title={
                  this.state.showApplicantTable
                    ? "Close Table"
                    : "View Applicants"
                }
                onClick={() => this.viewApplicants(job.id)}
              />
              <Button title="Edit Job" onClick={() => this.updateJob(job)} />
              <Button
                title="Delete Job"
                onClick={() => this.deleteJob(job.id)}
              />
            </div>
          </div>
        ))}
        {this.state.showApplicantTable && (
          <table className="table">
            <thead>
              <tr className="table__row">
                <th className="table__heading">Applicant</th>
                <th className="table__heading">Contact</th>
              </tr>
            </thead>
            <tbody>
              {this.state.applicants.map((applicant, index) => (
                <Table
                  name={applicant.name}
                  email={applicant.email}
                  phone={applicant.phone}
                  linkedInUrl={applicant.linkedInUrl}
                  resumeUrl={applicant.resumeUrl}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}

export default withRouter(JobsByYou);
