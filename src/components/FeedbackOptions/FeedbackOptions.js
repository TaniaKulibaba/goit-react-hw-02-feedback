import React from "react";
import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) =>
        <button key={option} type='button' data-feedback={option} onClick={onLeaveFeedback} className={styles.FeedbackOptions}>{option}</button>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;