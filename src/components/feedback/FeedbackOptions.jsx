import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, feedbackSelected }) => {
  return (
    <form className={css.feedbackForm}>
      {options.map(option => (
        <button
          className={css.formButton}
          key={option}
          type="button"
          onClick={() => feedbackSelected(option)}
        >
          {option}
        </button>
      ))}
    </form>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  feedbackSelected: PropTypes.func.isRequired,
};