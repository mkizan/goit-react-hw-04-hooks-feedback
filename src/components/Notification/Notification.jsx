import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const Notification = ({ message }) => {
  return (
    <Fragment>
      <p className={styles.message}>{message}</p>
    </Fragment>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
