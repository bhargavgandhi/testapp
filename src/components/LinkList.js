import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from './Link.js'
import generateLikelihood from './WinCalc.js';

class LinkList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wincalc: false
        };

        //this.getLikelihoodPercentage = this.getLikelihoodPercentage.bind(this);
        this.handleWinCalc = this.handleWinCalc.bind(this);
    }

    // async getLikelihoodPercentage(val) {
    //     const promiseObj = new Promise((resolve, reject) => {
    //         resolve(val);
    //     });
    //     let likelihoodPer = await promiseObj;
    //     likelihoodPer = Math.floor(likelihoodPer * 100)

    //     this.setState({
    //         winlikelihood: likelihoodPer
    //     })
    //     return likelihoodPer;
    // }

    // getLikelihood() {
    //     !this.state.winlikelihood && generateLikelihood()(this.getLikelihoodPercentage);
    // }

    handleWinCalc() {
        this.setState({
            wincalc: true
        })
        // sort by win
        // this.state.antsList.sort(function (a, b) {
        //     return a.winlikelihood - b.winlikelihood;
        // });
    }

    // I created this just to set the value in state and thought i can share state to child elements
    // componentWillMount(){
    //     this.setState({
    //         antsList: this.newAnts
    //     })
    // }
    
    render() {
        
        if (this.props.allAntsData && this.props.allAntsData.loading){
            return <div>Loading...</div>
        }
        if (this.props.allAntsData && this.props.allAntsData.error){
            return <div> Error </div>
        }

        const antsToRender = this.props.allAntsData.ants

        // I created this to give a new property and then later store value in it in order to sort as and when it has values.
        const newAnts = []
        antsToRender.map( (ant) => {
            let newObj = {
                'name'  : ant.name,
                'color' : ant.color,
                'weight' : ant.weight,
                'length' : ant.length,
                'winlikelihood' : 0 // this is the new property initializing it with 0
            } 
            newAnts.push(newObj);
            return false;
        })

        return (
            <div>
                <button className="wincalc-btn" onClick={!this.state.wincalc && this.handleWinCalc()}>
                    Calculate Win Likelihood
                </button>

                <div className="list-block">
                {
                    newAnts.map((ant) => (
                        <Link key={ant.name} ant={ant} findLikelihood={this.state.wincalc} />
                    ))
                }
                </div>
            </div>
        )
    }
}

const ALL_ANTS_DATA = gql`
  query allAntsData {
    ants {
      name
      color
      length
      weight
    }
  }
`;

export default graphql(ALL_ANTS_DATA, { name: 'allAntsData'})(LinkList);
