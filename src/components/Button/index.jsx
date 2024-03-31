import styles from './style.module.css'

export default function Button({ content = "תוכן ", className = "save", onClick = () => { }, onsubmit = () => { } }) {
  return (
    <div>
      <button  className={`${styles[className]} ${className}`} onClick={onClick} >{content}</button>
    </div>
  )
}
