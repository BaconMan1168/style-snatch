import { useEffect, useState } from "react"
import ColorItem from "./ColorItem.jsx"
import styles from "./styles.module.css"

export default function ColorPage() {
  const [storedColors, setStoredColors] = useState([]);


  useEffect(() => {
    chrome.storage.local.get("colors", (result) => {
      setStoredColors(result.colors || []);
    });
  }, []);

  function handleFullDelete() {
    chrome.storage.local.remove("colors", () => {
      setStoredColors([]);
    });
  }

  function handleSingleDelete(index) {
    const newColors = storedColors.filter((_, ind) => ind !== index);
    chrome.storage.local.set({ colors: newColors }, () => {
      setStoredColors(newColors);
    });
  }

  return (
    <div>
      <h2>Colors</h2>
      <div className={styles.colorPage}>
        {storedColors.map((c, i) => (
          <ColorItem
            key={i}
            color={c}
            handleDelete={() => handleSingleDelete(i)}
          />
        ))}
      </div>

      {storedColors.length > 0 ? (
        <button className={styles.btn} onClick={handleFullDelete}>
            Clear Saved Colors
        </button>
        ) : (
        <h2 className={styles.emptyPage}>Empty. Add colors!</h2>
        )}
    </div>
  );
}