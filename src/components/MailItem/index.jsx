import styles from './style.module.css'
import data from '../../data/data.json'
import { NavLink } from 'react-router-dom';
export default function MailItem({v, i}) {
  console.log("v:", v);
  return (
    <NavLink to={i} className={styles.container} >
      <div className={styles.sender}> {v.info.sender} </div>
      <div className={styles.time}> {v.info.time} </div>
      <div className={styles.message}> {v.info.message} </div>
    </NavLink>
  )
}
