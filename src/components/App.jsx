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
    if (state.Good === 0 && state.Neutral === 0 && state.Bad === 0) {
      return 0;
    } else {
      return state.Good + state.Neutral + state.Bad;
    }
  };

  const postiveFeedbackPercent = () => {
    if (totalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((state.Good / totalFeedback()) * 100);
    }
  };

  const options = Object.keys(state);

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
            Good={state.Good}
            Neutral={state.Neutral}
            Bad={state.Bad}
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
