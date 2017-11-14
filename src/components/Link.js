import React, { Component } from "react";
import generateLikelihood from "./WinCalc.js";
import AntImage from "./AntImage";

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winlikestatus: "Not Yet" // I am setting this to show status (Not Yet, In Progress, Calculated - will work on it once sorting is done).
    };

    this.getLikelihoodPercentage = this.getLikelihoodPercentage.bind(this);
  }

  async getLikelihoodPercentage(val) {
    const promiseObj = new Promise((resolve, reject) => {
      resolve(val);
    });
    let likelihoodPer = await promiseObj;
    likelihoodPer = Math.floor(likelihoodPer * 100);

    this.setState({
      winlikelihood: likelihoodPer
    });
    return likelihoodPer;
  }

  getLikelihood() {
    !this.state.winlikelihood &&
      generateLikelihood()(this.getLikelihoodPercentage);
  }

  render() {
    const { ant, findLikelihood } = this.props;
    const { winlikelihood } = this.state;

    findLikelihood && this.getLikelihood();

    let barWidthInit = {
      padding: "10px",
      backgroundColor: "#fff"
    };
    let barWidth = {
      width: winlikelihood && winlikelihood + "%",
      color: winlikelihood && "#fff",
      padding: winlikelihood && "10px"
    };
    return (
      <ul>
        <li>{ant.name}</li>

        <li>
          <AntImage antColor={ant.color} />
        </li>

        <li>Length: {ant.length}</li>
        <li>Weight: {ant.weight}</li>
        <li className="winning-bar">
          {winlikelihood ? (
            <span style={barWidth}>{winlikelihood}%</span>
          ) : (
            <span style={barWidth} />
          )}
        </li>
        <li>Status:</li>
      </ul>
    );
  }
}

export default Link;
