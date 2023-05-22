import { Component } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions.jsx';
import Statistics from './statistics/Statistics.jsx';
import Section from './section/Section.jsx';
import Notification from './notification/Notification.jsx';

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  feedbackSelected = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  totalFeedback = () => {
    if (
      this.state.Good === 0 &&
      this.state.Neutral === 0 &&
      this.state.Bad === 0
    ) {
      return 0;
    } else {
      return this.state.Good + this.state.Neutral + this.state.Bad;
    }
  };

  postiveFeedbackPercent = () => {
    if (this.totalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.Good / this.totalFeedback()) * 100);
    }
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            feedbackSelected={this.feedbackSelected}
          />
        </Section>
        <Section title="Statistics">
          {this.totalFeedback() > 0 ? (
            <Statistics
              Good={this.state.Good}
              Neutral={this.state.Neutral}
              Bad={this.state.Bad}
              positivePercentage={this.postiveFeedbackPercent()}
              total={this.totalFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;