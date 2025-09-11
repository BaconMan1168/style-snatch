import styles from "./styles.module.css"

import Icon from '@mdi/react';
import { mdiPaletteOutline, mdiFormatSize, mdiMonitorShimmer} from '@mdi/js';





export default function HomePage(){
    return (
        <div className={styles.home}>
            <div className={styles.card}>
                <div>
                    <Icon path={mdiPaletteOutline} size={1} />
                    <h2>Colors</h2>
                </div>
                <p>
                    Grab and save colors with ease.
                </p>
            </div>

            <div className={styles.card}>
               <div>
                <Icon path={mdiFormatSize} size={1} />
                <h2>Fonts</h2>
               </div>
                <p>
                    Capture font styles instantly.
                </p>
            </div>

            <div className={styles.card}>
                <div>
                    <Icon path={mdiMonitorShimmer} size={1} />
                    <h2>Minimal</h2>
                </div>
                <p>
                    Lightweight and distraction-free.
                </p>
            </div>

        </div>
    ) 
}