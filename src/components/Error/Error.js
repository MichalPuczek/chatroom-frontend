import React from 'react'
import styles from './Error.module.scss';

export const Error = ({ message }) => {

    if (!message) {
        return false;
    }
    return (
        <div className={styles["error-message"]}>
            {message}
        </div>
    );
};

export default Error;
