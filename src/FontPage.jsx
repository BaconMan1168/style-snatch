import { useOutletContext } from "react-router"

export default function FontPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();
    
    return (
        <div>
            <h2>Fonts</h2>
            <ul>
                {colorsAndFonts[1] && fonts.map((f, i) => <li key={i}>{f.font} ({f.size})</li>)}
            </ul>
        </div>
    )
}