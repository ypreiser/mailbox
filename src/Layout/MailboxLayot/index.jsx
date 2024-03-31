import { useState } from 'react';
import styles from './style.module.css';
import Button from '../../components/Button';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaEnvelope, FaInbox, FaPaperPlane, FaPen, FaStar, FaTrash } from 'react-icons/fa';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';


export default function MailboxLayout() {
  const [more, setMore] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <FaAngleLeft />
        <h1>Mailbox</h1>
        <Button content={[<FaEnvelope />, 'New message']} />
        <div className={styles.sidebarMenu}>
          <NavLink to="./inbox" className={styles.menuItem}>
            <FaInbox />
            Inbox
            <span className={styles.badge}>1</span>
          </NavLink>
          <NavLink to="./sent" className={styles.menuItem}>
            <FaPaperPlane />
            Sent Emails
          </NavLink>
          <NavLink to="./favorites" className={styles.menuItem}>
            <FaStar />
            Favourite
          </NavLink>
          <NavLink to="./drafts" className={styles.menuItem}>
            <FaPen />
            Draft
          </NavLink>
          <NavLink to="./deleted" className={styles.menuItem}>
            <FaTrash />
            Deleted
          </NavLink>
          <div className={styles.menuItem} onClick={() => setMore(!more)}>
            {more
              ? <FaAngleUp />
              : <FaAngleDown />
            }
            More
          </div>
        </div>
        <div className={styles.labels}>
          {/* TODO: <LabelList/> */}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.toolbar}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <Outlet />
        <div className={styles.messageList}>
        </div>
      </div>
    </div>
  );
}
