import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.scss";
import Button from "../../Components/Button/Button";
import PostJob from "../../Components/PostJob/PostJob";
import FindJob from "../../Components/FindJob/FindJob";
import Profile from "../../Components/Profile/Profile";
import JobsByYou from "../../Components/JobsByYou/JobsByYou";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class Dashboard extends Component {
  state = {
    userInfo: {},
    isLoading: true,
  };
  componentDidMount() {
    let token = sessionStorage.getItem("authToken");
    token
      ? axios
          .get("http://localhost:5050/users/current", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
           // console.log(res.data);
            this.setState({
              userInfo: res.data,
              isLoading: false,
            });
          })
      : this.props.history.push("/login");
  }
  render() {
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <section>
        <div className="dashboard">
          
          <div className="dashboard__main">
            <h2 className="dashboard__heading">{`Welcome Dr ${this.state.userInfo.name}`}</h2>
            <Switch>
              <Route path="/dashboard" exact render={() => <FindJob userInfo={this.state.userInfo} />}  />
              <Route path="/dashboard/postjob" component={PostJob} />
              <Route path="/dashboard/jobsbyyou" component={JobsByYou} />
            </Switch>

          </div>
          <Profile />
        </div>
      </section>
    );
  }
}

export default Dashboard;
