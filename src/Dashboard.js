

import React, { Component } from "react";
import CoinHomePage from "./Coins/CoinHomePage";
import HomePageAmazon from "./Amazon/HomePageAmazon"
import "./Dashboard.css";
import Actor from "./ActorMovies/Actor";
 import ImdbDashboard from './IMDb/ImdbDashboard';
 

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "ImdbDashboard", component: <ImdbDashboard /> },
        { name: "CoinHomePage", component: <CoinHomePage /> },
        { name: "Actor", component: <Actor /> },
        { name: "HomePageAmazon", component: <HomePageAmazon /> },
        // { name: "Fruits", component: <FruitDashboard /> }
      ],
      selectedProject: null, // Initially no project is selected
    };
  }

  handleProjectClick = (project) => {
    this.setState({ selectedProject: project.component });
  };

  render() {
    return (
      <div className="dashboard-main-container">
        <h1 style={{ color: "black", fontSize: "40px" }}>React Projects</h1>
        <div className="Projects-Container">
          {this.state.projects.map((project, index) => (
            <div
              key={index}
              className="project-box"
              onClick={() => this.handleProjectClick(project)}
              style={{ cursor: "pointer" }}
            >
              {project.name}
            </div>
          ))}
        </div>
        <br />
        {/* {/ Render the selected project below /} */}
        <div className="Project-Content">
          {this.state.selectedProject ? this.state.selectedProject : <p></p>}
        </div>
      </div>
    );
  }
}
