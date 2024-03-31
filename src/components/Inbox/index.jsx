import styles from './style.module.css'
import data from '../../data/data.json'
import MailItem from '../MailItem';

export default function Inbox() {
    console.log({ data });
    return (
        <div>
            inbox
            {
                data?.inbox?.map((v, i) => {
                    return <MailItem key={i} info={v} />; // Added return statement
                })
            }
        </div>
    );
}
