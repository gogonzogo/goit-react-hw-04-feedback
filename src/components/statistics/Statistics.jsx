import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ Good, Neutral, Bad, total, positivePercentage }) => {
    return (
      <ul className={css.statisticsList}>
        <li className={css.statisticsListItem}>
          Good:
          <span className={css.statisticsListValue}>{Good}</span>
        </li>
        <li className={css.statisticsListItem}>
          Neutral:
          <span className={css.statisticsListValue}>{Neutral}</span>
        </li>
        <li className={css.statisticsListItem}>
          Bad:
          <span className={css.statisticsListValue}>{Bad}</span>
        </li>
        <li className={css.statisticsListItem}>
          Total:{' '}
          <span className={css.statisticsListValue}>{total}</span>
        </li>
        <li className={css.statisticsListItem}>
          Positive feedback:{' '}
          <span className={css.statisticsListValue}>
            {positivePercentage}%
          </span>
        </li>
      </ul>
    );
  }

Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};