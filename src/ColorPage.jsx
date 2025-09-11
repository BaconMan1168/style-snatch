import { useOutletContext } from "react-router"
import { useState } from "react"

export default function ColorPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();
    const [storedColors, setStoredColors] = useState(colors);

    function handleFullDelete(){
        chrome.storage.local.remove("colors", () => {
            setStoredColors([]);
        });
    }
    
    return (
        <div>
            <h2>Colors</h2>
            <ul>
                {colorsAndFonts[0] && storedColors.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
            <button onClick={handleFullDelete}>Clear Saved Colors</button>
        </div>
    )
}