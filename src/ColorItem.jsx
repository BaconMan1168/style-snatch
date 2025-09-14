import styles from "./styles.module.css"

export default function ColorItem({color, handleDelete}){
    const colorSquare = {
        backgroundColor: color,
        width: "90%",
        height: "50px",
        margin: "auto",
    }

    return (
        <div className={styles.colorCard}>
            <div style={colorSquare}></div>
            <p>{color}</p>
            <button className={styles.btn} onClick={handleDelete}>Delete Color</button>
        </div>
    )
}