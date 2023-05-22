import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <ul className={css.statisticsList}>
        <li className={css.statisticsListItem}>
          Good:
          <span className={css.statisticsListValue}>{this.props.Good}</span>
        </li>
        <li className={css.statisticsListItem}>
          Neutral:
          <span className={css.statisticsListValue}>{this.props.Neutral}</span>
        </li>
        <li className={css.statisticsListItem}>
          Bad:
          <span className={css.statisticsListValue}>{this.props.Bad}</span>
        </li>
        <li className={css.statisticsListItem}>
          Total:{' '}
          <span className={css.statisticsListValue}>{this.props.total}</span>
        </li>
        <li className={css.statisticsListItem}>
          Positive feedback:{' '}
          <span className={css.statisticsListValue}>
            {this.props.positivePercentage}%
          </span>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
