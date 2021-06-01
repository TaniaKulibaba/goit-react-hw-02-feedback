import React from "react";
import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
    return (
        <>
            {total > 0 && (
                <ul className={styles.Statistics}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positivePercantage}%</li>
                </ul>
            )}
            {total === 0 && <Notification message='No Feedback given' />} 
        </>
    )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercantage: PropTypes.number.isRequired,
};

export default Statistics;