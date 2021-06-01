import React from "react";
import PropTypes from 'prop-types';
import styles from "./Section.module.scss";

const Section = ({ title, children }) => {
    return (
        <section className={styles.Section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default Section;