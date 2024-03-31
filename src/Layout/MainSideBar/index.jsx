import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faCalendarCheck, faEye, faUserGroup, faChartSimple, faVideo } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';

export default function MainSideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>logo</div>
            <div className={styles.nav}>
                <NavLink to="/dashboard" className={styles.link} activeClassName={styles.active}>
                    <FontAwesomeIcon icon={faGauge} className={styles.icon}/>
                </NavLink>
                <NavLink to="/calendar" className={styles.link} activeClassName={styles.active}>
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
                </NavLink>
                <NavLink to="/view" className={styles.link} activeClassName={styles.active}>
                    <FontAwesomeIcon icon={faEye} className={styles.icon} />
                </NavLink>
                <NavLink to="/mailbox" className={styles.link} activeClassName={styles.active}>
                    <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
                </NavLink>
                <NavLink to="/charts" className={styles.link} activeClassName={styles.active}>
                    <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
                </NavLink>
                <NavLink to="/videos" className={styles.link} activeClassName={styles.active}>
                    <FontAwesomeIcon icon={faVideo} className={styles.icon}/>
                </NavLink>
            </div>
            <div className={styles.avatar}>avatar</div>

        </div>
    );
}
