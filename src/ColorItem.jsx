import styles from "./styles.module.css"
import { useState } from "react"

export default function ColorItem({color, handleDelete}){
    const [inputText, setInputText] = useState("");

    function handleChange(e){
        setInputText(e.target.value);
    }

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
            <input type="text" placeholder="e.g header-color" className={styles.colorUnderlineInput} value={inputText} onChange={handleChange} />
            <button className={styles.btn} onClick={handleDelete}>Delete Color</button>
        </div>
    )
}