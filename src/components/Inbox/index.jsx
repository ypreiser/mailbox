import styles from './style.module.css'
import data from '../../data/data.json'
import MailItem from '../MailItem';

export default function Inbox() {
    console.log({ data });
    return (
        <div className={styles.inbox}>
             <div className={styles.toolbar}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
            inbox
            {
                data?.inbox?.map((v, i) => {
                    return <MailItem key={i} info={v} />; 
                })
            }
        </div>
    );
}
