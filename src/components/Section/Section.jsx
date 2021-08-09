import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.section__name}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
