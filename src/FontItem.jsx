import styles from "./styles.module.css"
import { useState } from "react"

export default function FontItem({font, handleDelete}){
    const [inputText, setInputText] = useState("");

    function handleChange(e){
        setInputText(e.target.value);
    }

    const firstFont = font.font.split(",")[0].trim().replace(/^['"]|['"]$/g, "");

    return (
        <div className={styles.fontCard}>
            <p className={styles.fontName}>{firstFont}</p>
            <input type="text" placeholder="e.g header-font" className={styles.fontUnderlineInput} value={inputText} onChange={handleChange} />
            <button className={styles.btn} onClick={handleDelete}>Delete Font</button>
        </div>
    )
}