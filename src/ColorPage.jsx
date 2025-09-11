import { useOutletContext } from "react-router"

export default function ColorPage(){
    const { fonts, colors, colorsAndFonts } = useOutletContext();
    
    return (
        <div>
            <h2>Colors</h2>
            <ul>
                {colorsAndFonts[0] && colors.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
        </div>
    )
}