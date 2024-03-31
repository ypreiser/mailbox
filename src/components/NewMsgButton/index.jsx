import { FaEnvelope } from 'react-icons/fa'
import styles from './style.module.css'

export default function NewMsgButton() {
  return (
    <div>
      <button className={styles.save}  >
        <FaEnvelope />
        New Message
      </button>
    </div>
  )
}
