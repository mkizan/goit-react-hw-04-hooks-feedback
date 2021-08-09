import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Statisctics.module.scss';

const Statisctics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Fragment>
      <ul className={styles.list}>
        <li className={styles.list__item}>Good: {good}</li>
        <li className={styles.list__item}>Neutral: {neutral}</li>
        <li className={styles.list__item}>Bad: {bad}</li>
        <li className={styles.list__item}>
          Total: {total(good, neutral, bad)}
        </li>
        <li className={styles.list__item}>
          Positive feedback: {positivePercentage(good, neutral, bad)}
        </li>
      </ul>
    </Fragment>
  );
};

Statisctics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statisctics;
