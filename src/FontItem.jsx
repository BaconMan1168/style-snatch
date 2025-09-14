import styles from "./styles.module.css"

export default function FontItem({font, handleDelete}){
    return (
        <div>
            <p>{font.font} {font.size}</p>
            <button className={styles.btn} onClick={handleDelete}>Delete Font</button>
        </div>
    )
}