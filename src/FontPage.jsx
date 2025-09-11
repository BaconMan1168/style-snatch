import { useOutletContext } from "react-router"

export default function FontPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();

    function handleDelete(){
        chrome.storage.local.remove("fonts", () => {
            console.log("removed fonts");
        });
    }
    
    return (
        <div>
            <h2>Fonts</h2>
            <ul>
                {colorsAndFonts[1] && fonts.map((f, i) => <li key={i}>{f.font} ({f.size})</li>)}
            </ul>
            <button onClick={handleDelete}>Clear Saved Fonts</button>
        </div>
    )
}