import { useOutletContext } from "react-router-dom"

export default function ColorPage(){
    const { fonts, colors } = useOutletContext();
    
    return (
        <div>
            <h1>Colors</h1>
            <ul>
                {colors && colors.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
        </div>
    )
}