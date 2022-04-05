import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.scss";
import Button from "../../Components/Button/Button";
import Carousel from "../../Components/Carousel/Carousel";
import PostJob from "../../Components/PostJob/PostJob";
import FindJob from "../../Components/FindJob/FindJob";
import Profile from "../../Components/Profile/Profile";

export class Dashboard extends Component {
  state = {
    userInfo: {},
    isLoading: false,
    showSideNav: false,
  };
  // componentDidMount() {
  //   let token = sessionStorage.getItem("authToken");
  //   token
  //     ? axios
  //         .get("http://localhost:8080/users/current", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           this.setState({
  //             userInfo: res.data,
  //             isLoading: false,
  //           });
  //         })
  //     : this.props.history.push("/login");
  // }
  render() {
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <section>
        <div className="dashboard">
          <Profile />
          <div className="dashboard__main">
            <h2>{`Welcome Dr ${(this.state.userInfo.name =
              "Paul McKinsey")}`}</h2>
            {/* <FindJob /> */}
            <PostJob />
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
