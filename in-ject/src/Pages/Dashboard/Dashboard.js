import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.scss";
import PostJob from "../../Components/PostJob/PostJob";
import FindJob from "../../Components/FindJob/FindJob";
import Profile from "../../Components/Profile/Profile";
import JobsByYou from "../../Components/JobsByYou/JobsByYou";
import { Switch, Route } from "react-router-dom";

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
            <h2 className="dashboard__heading">
              {`Welcome ${this.state.userInfo.position} ${this.state.userInfo.name}`}{" "}
            </h2>
            <Switch>
              <Route
                path="/dashboard"
                exact
                render={() => <FindJob userInfo={this.state.userInfo} />}
              />
              <Route
                path="/dashboard/postjob"
                render={() => <PostJob userInfo={this.state.userInfo} />}
              />
              <Route
                path="/dashboard/jobsbyyou"
                render={() => <JobsByYou userInfo={this.state.userInfo} />}
              />
            </Switch>
          </div>
          <Profile userInfo={this.state.userInfo} />
        </div>
      </section>
    );
  }
}

export default Dashboard;
