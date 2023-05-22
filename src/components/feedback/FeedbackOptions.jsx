import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <form className={css.feedbackForm}>
        {this.props.options.map(option => (
          <button
            className={css.formButton}
            key={option}
            type="button"
            onClick={() => this.props.feedbackSelected(option)}
          >
            {option}
          </button>
        ))}
      </form>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  feedbackSelected: PropTypes.func.isRequired,
};

export default FeedbackOptions;
