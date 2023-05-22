import css from './Notification.module.css';
import PropType from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <p className={css.notification}>{message}</p>);
}

Notification.propTypes = {
  message: PropType.string.isRequired,
};