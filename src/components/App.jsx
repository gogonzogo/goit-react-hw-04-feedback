import { FeedbackOptions } from './feedback/FeedbackOptions.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { Section } from './section/Section.jsx';
import { Notification } from './notification/Notification.jsx';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const feedbackSelected = state => {
    setState(prevState => ({
      ...prevState,
      [state]: prevState[state] + 1,
    }));
  };

  const totalFeedback = () => {
    const { Good, Neutral, Bad } = state;
    if (Good === 0 && Neutral === 0 && Bad === 0) {
      return 0;
    } else {
      return Good + Neutral + Bad;
    }
  };

  const postiveFeedbackPercent = () => {
    const { Good } = state;
    if (totalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((Good / totalFeedback()) * 100);
    }
  };

  const options = Object.keys(state);
  const { Good, Neutral, Bad } = state;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          feedbackSelected={feedbackSelected}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() > 0 ? (
          <Statistics
            Good={Good}
            Neutral={Neutral}
            Bad={Bad}
            positivePercentage={postiveFeedbackPercent()}
            total={totalFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
