import { MouseEvent, useState } from "react"
import GrowCard from "../Cards/GrowCard"
import { growCardContainer, growCardMain } from "./growCardGallery.css"

const GrowCardGallery = () => {
    const [xyPosition, setXyPosition] = useState({ x: '0', y: '0', xp: '0', yp: '0', })

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        setXyPosition({
            x: event.clientX.toFixed(2),
            y: event.clientY.toFixed(2),
            xp: (event.clientX / window.innerWidth).toFixed(2),
            yp: (event.clientY / window.innerHeight).toFixed(2),
        })
    }

    return (
        <div className={growCardContainer} onMouseMove={handleMouseMove}>
            <div className={growCardMain}>
                <GrowCard xyPosition={xyPosition} base={80} spread={500} outer={1} size={200} border={3} />
                <GrowCard xyPosition={xyPosition} size={200} border={3} />
                <GrowCard xyPosition={xyPosition} base={220} spread={200} outer={1} size={200} border={3} />
            </div>
        </div>
    )
}

export default GrowCardGallery