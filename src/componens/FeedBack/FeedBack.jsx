import React, { Component } from 'react'
import BtnSection from '../BtnSection/BtnSection'
import StatisticSection from '../StatisticSection/StatisticSection'
import Notification from '../Notification/Notification'
class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  onClickFeedback = event => {
    const {name} = event.currentTarget;
    this.setState(state => {
      return {
        [name]: state[name] + 1,
        total: this.countTotalFeedback() + 1 ,
      }
    })
  };
  
  countTotalFeedback = () => {
   const { good, neutral, bad } = this.state;
    const result = good + neutral + bad ;
    return result;
        
  };

countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};


  render() {
    const total = this.countTotalFeedback();
    
    return (
      <>
       <div>
          <BtnSection onClickFeedback={this.onClickFeedback}
        
          />
          {total === 0 ? (
            <Notification message="There is no feedback"/>
              ) :
            
           ( <StatisticSection valueGood={this.state.good}
            valueNeutral={this.state.neutral}
            valueBad={this.state.bad}
            valueTotal={this.state.total}
           positiveFeedback = {this.countPositiveFeedbackPercentage()}
          />)}
          
          
    </div>
      </> 
    )
   
}

}



export default FeedBack