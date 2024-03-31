import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faCalendarCheck, faEye, faUserGroup, faChartSimple, faVideo } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import { FaClock } from 'react-icons/fa';

export default function MainSideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>logo</div>
            <nav className={styles.nav}>
                <NavLink to="/dashboard" className={styles.link} >
                    <FaClock className={styles.icon}/>
                </NavLink>
                <NavLink to="/calendar" className={styles.link} >
                    <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
                </NavLink>
                <NavLink to="/view" className={styles.link} >
                    <FontAwesomeIcon icon={faEye} className={styles.icon} />
                </NavLink>
                <NavLink to="/mailbox" className={styles.link} >
                    <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
                </NavLink>
                <NavLink to="/charts" className={styles.link} >
                    <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
                </NavLink>
                <NavLink to="/videos" className={styles.link} >
                    <FontAwesomeIcon icon={faVideo} className={styles.icon}/>
                </NavLink>
            </nav>
            <div className={styles.avatar}>avatar</div>

        </div>
    );
}
