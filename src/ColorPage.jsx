import { useOutletContext } from "react-router"

export default function ColorPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();

    function handleDelete(){
        chrome.storage.local.remove("colors", () => {
            console.log("removed colors");
        });
    }
    
    return (
        <div>
            <h2>Colors</h2>
            <ul>
                {colorsAndFonts[0] && colors.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
            <button onClick={handleDelete}>Clear Saved Colors</button>
        </div>
    )
}