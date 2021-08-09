import { Fragment, useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';

// function commentsReducer(commentCount, action) {
//   switch (action.type) {
//     case 'good':
//       return commentCount + action.payload

//     case 'neutral':
//       return commentCount + action.payload

//     case 'bad':
//       return commentCount + action.payload

//     default:
//       return commentCount;
//   }
// }

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const options = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good => good + 1);

      case 'neutral':
        return setNeutral(neutral => neutral + 1);

      case 'bad':
        return setBad(bad => bad + 1);

      default:
        return;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round(100 / ((good + neutral + bad) / good)) + '%';
  };

  return (
    <Fragment>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback(good, neutral, bad) > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    </Fragment>
  );
}
