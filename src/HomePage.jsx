import styles from "./styles.module.css"

export default function HomePage(){
    return (
        <div className={styles.home}>
            <div>
                <h2>Who this is for</h2>
                <p>
                    This tool is built for software engineers who are not UX or design experts 
                    but still need to make quick, informed style decisions. Instead of guessing 
                    olors or fonts, you can instantly grab the fonts and color palette of any webpage.
                </p>
            </div>
            <div>
                <h2>Features</h2>
                <p>
                    With just a few steps, this extension shows you all the fonts and color codes used on a page. 
                    To grab a font, simply highlight any text, right-click, and choose “Grab Font.” 
                    To capture a color, hold Shift and click anywhere to open the eyedropper tool. 
                </p>
            </div>
        </div>
    ) 
}