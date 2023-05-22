import css from './Notification.module.css';
import PropType from 'prop-types';

export default function Notification({ message }) {
  return (
    <p className={css.notification}>{message}</p>);
}

Notification.propTypes = {
  message: PropType.string.isRequired,
};