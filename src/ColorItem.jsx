import styles from "./styles.module.css"

export default function ColorItem({color, handleDelete}){
    const colorSquare = {
        backgroundColor: color,
        width: "100%",
        height: "50px"
    }

    return (
        <div className={styles.colorCard}>
            <div style={colorSquare}></div>
            <p>{color}</p>
            <button onClick={handleDelete}>Delete Color</button>
        </div>
    )
}