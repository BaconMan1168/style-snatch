import { useOutletContext } from "react-router"
import { useState } from "react"
import FontItem from "./FontItem.jsx"

export default function FontPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();
    const [storedFonts, setStoredFonts] = useState(fonts);

    function handleFullDelete(){
        chrome.storage.local.remove("fonts", () => {
            setStoredFonts([]);
        });
    }

    function handleSingleDelete(index){
        const newFonts = storedFonts.filter((font, ind) => ind !== index);
        chrome.storage.local.set({fonts: newFonts});
        setStoredFonts(newFonts);
    }
    
    return (
        <div>
            <h2>Fonts</h2>
            <ul>
                {colorsAndFonts[1] && storedFonts.map((f, i) => <FontItem key={i} font={f} handleDelete={() => handleSingleDelete(i)} />)}
            </ul>
            <button onClick={handleFullDelete}>Clear Saved Fonts</button>
        </div>
    )
}