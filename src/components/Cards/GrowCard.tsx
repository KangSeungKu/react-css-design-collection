import { growCardArticle, growCardBase, growCardButton, growCardButtonText, growCardFrame, growCardThemeVars } from "./growCard.css"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import clsx from "clsx";

interface Props {
    xyPosition: {x: string; y: string; xp: string; yp: string;}
    base?: number;
    spread?: number;
    outer?: number;
    radius?: number;
    border?: number;
    size?: number;
    backdrop?: string;
}

const GrowCard = ({
    xyPosition,
    base = 0,
    spread = 0,
    outer = 1,
    radius = 14,
    border = 2,
    size = 150,
    backdrop = 'hsl(0 0% 60% / 0.12)',
}: Props) => {

    return (
        <article 
            className={clsx(growCardArticle, growCardBase)} 
            style={assignInlineVars(growCardThemeVars, {
                mouse: {
                    x: `${xyPosition.x}px`,
                    y: `${xyPosition.y}px`,
                },
                card: {
                    blur: '5px',
                    outer: String(outer),
                    backdrop: backdrop,
                    borderRadius: `${radius}px`,
                    borderSize: `${border}px`,
                    backupBorder: backdrop,
                },
                spotlight: {
                    size: `${size}px`,
                    hue: !base ? '210' : String(base + +xyPosition.xp * spread),
                    saturation: '100%',
                    lightness: '70%',
                },
                background: {
                    spot: {
                        opacity: '1',
                    },
                    size: `${100 + 2 * border}%`,
                }
            })}
        >
            <span className={clsx(growCardFrame, growCardBase)} />
            <button className={clsx(growCardButton, growCardBase)}>
                <span className={growCardButtonText}>Glow Up</span>
            </button>
        </article>
    )
}

export default GrowCard