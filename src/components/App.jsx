import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notofocation/Notification";

// const optionsBtn = ["Good", "Neutral", "Bad"]

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positivePercentage: 0, 
    // visible: false,
  }
  

  onLeaveFeedback = (options) => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1}))
    }

  // handleClickGood = () => {
  //   this.setState(prevState => ({
  //       good: prevState.good +1,
  //   }), this.countTotalFeedback);
  // }

  // handleClickNeutral = () => {
  //   this.setState((prevState) => {
  //     return {
  //       neutral: prevState.neutral +1}
  //   }, this.countTotalFeedback)
  // }

  // handleClickBad = () => {
  //   this.setState((prevState) => {
  //     return {
  //       bad: prevState.bad +1}
  //   }, this.countTotalFeedback)
  // }

  // countTotalFeedback = () => {
  //   const total = this.state.good + this.state.neutral + this.state.bad;
  //   this.setState ({
  //     total
  // }, this.countPositiveFeedbackPercentage);
  // }

  // countPositiveFeedbackPercentage = () => {
  //   const positivePercentage = Math.round((this.state.good * 100) / this.state.total)
  //   this.setState ({
  //     positivePercentage
  // });
  // }

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }


  countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round((this.state.good * 100) / this.countTotalFeedback())
    return positivePercentage;
  }

  // onShowStatistics = () => {
  //   this.setState({visible: true})
  // }
 
  render() {
    const {good, neutral, bad} = this.state;
  return (
    <Section>
      <Section title = 'Please leave feedback'>
        <FeedbackOptions
        options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}
        // onIncrGood={()=>{this.handleClickGood(); this.showStatistics()}}
        // onIncrNeutral={() =>{this.handleClickNeutral(); this.showStatistics()}}
        // onIncrBad={() =>{this.handleClickBad(); this.showStatistics()}}
        />
        </Section>
    <Section title = 'Statistics'>
      {!this.countTotalFeedback()? <Notification message="There is no feedback"/> : <Statistics 
      good={good} 
      neutral={neutral}
      bad={bad}
      total={this.countTotalFeedback()}
      positivePercentage={this.countPositiveFeedbackPercentage()}
      />}
      
      </Section>

{/* <Section title = 'Statistics'>
      <Statistics 
      good={this.state.good} 
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={this.countTotalFeedback()}
      positivePercentage={this.countPositiveFeedbackPercentage()}
      />
      
      </Section> */}
    </Section>
    
  )}
};

