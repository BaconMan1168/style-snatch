import { useOutletContext } from "react-router"
import { useState } from "react"

export default function FontPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();
    const [storedFonts, setStoredFonts] = useState(fonts);

    function handleFullDelete(){
        chrome.storage.local.remove("fonts", () => {
            setStoredFonts([]);
        });
    }
    
    return (
        <div>
            <h2>Fonts</h2>
            <ul>
                {colorsAndFonts[1] && storedFonts.map((f, i) => <li key={i}>{f.font} ({f.size})</li>)}
            </ul>
            <button onClick={handleFullDelete}>Clear Saved Fonts</button>
        </div>
    )
}