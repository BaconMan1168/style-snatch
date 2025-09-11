import { useOutletContext } from "react-router"
import { useState } from "react"
import ColorItem from "./ColorItem.jsx"

export default function ColorPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();
    const [storedColors, setStoredColors] = useState(colors);

    function handleFullDelete(){
        chrome.storage.local.remove("colors", () => {
            setStoredColors([]);
        });
    }

    function handleSingleDelete(index){
        const newColors = storedColors.filter((color, ind) => ind !== index);
        chrome.storage.local.set({colors: newColors});
        setStoredColors(newColors);
    }
    
    return (
        <div>
            <h2>Colors</h2>
            <div>
                {colorsAndFonts[0] && storedColors.map((c, i) => <ColorItem key={i} color={c} handleDelete={() => handleSingleDelete(i)} />)}
            </div>
            <button onClick={handleFullDelete}>Clear Saved Colors</button>
        </div>
    )
}