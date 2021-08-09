import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map(option => {
        return (
          <li key={option} className={styles.list__item}>
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              className={styles.btn}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
