import { useEffect, useState } from "react"
import FontItem from "./FontItem.jsx"
import styles from "./styles.module.css"

export default function FontPage() {
  const [storedFonts, setStoredFonts] = useState([]);


  useEffect(() => {
    chrome.storage.local.get("fonts", (result) => {
      setStoredFonts(result.fonts || []);
    });
  }, []);

  function handleFullDelete() {
    chrome.storage.local.remove("fonts", () => {
      setStoredFonts([]);
    });
  }

  function handleSingleDelete(index) {
    const newFonts = storedFonts.filter((_, ind) => ind !== index);
    chrome.storage.local.set({ fonts: newFonts }, () => {
      setStoredFonts(newFonts);
    });
  }

  return (
    <div>
      <h2>Fonts</h2>
      <div className={styles.fontPage}>
        {storedFonts.map((f, i) => (
          <FontItem
            key={i}
            font={f}
            handleDelete={() => handleSingleDelete(i)}
          />
        ))}
      </div>

      {storedFonts.length > 0 ? (
        <button className={styles.btn} onClick={handleFullDelete}>
            Clear Saved Fonts
        </button>
        ) : (
        <h2 className={styles.emptyPage}>Empty. Add Fonts!</h2>
        )}
    </div>
  );
}