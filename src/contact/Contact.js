import React from 'react';

import styles from './contact.module.css';

const Contact = () => {
    return (
        <div id={styles.contact}>
            <h1>Contact Us</h1>
            <div className={styles.container}>
                <div className={styles.email}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" value="mytodolist2625@gmail.com" id="email" readOnly />
                </div>
                <div className={styles.insta}>
                    <label htmlFor="instagram">Username: </label>
                    <input type="email" value="reactDevOps2625" id="instagram" readOnly />
                </div>
            </div>
        </div>
    )
}

export default Contact;
