import { useOutletContext } from "react-router-dom"

export default function FontPage(){
    const { fonts, colors } = useOutletContext();
    
    return (
        <div>
            <h1>Fonts</h1>
            <ul>
                {fonts && fonts.map((f, i) => <li key={i}>{f.font} ({f.size})</li>)}
            </ul>
        </div>
    )
}