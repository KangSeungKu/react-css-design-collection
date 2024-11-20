import { useState } from "react"
import { flight, flightComponent, flightContainer, themeVars } from "./flightSlider.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
    width?: string;
    height?: string;
    departure?: string;
    arrival?: string;
    lineColor?: string;
    airPlaneBodyColor?: string;
    airPlaneWingsColor?: string;
}
const FlightSlider = ({
    width = 'min(700px, 90vw)',
    height = '3em',
    departure = 'Departure',
    arrival = 'Arrival',
    lineColor = '#6c6c84',
    airPlaneBodyColor = '#f0f4fc',
    airPlaneWingsColor = '#b55',
}: Props) => {
    const [value, setValue] = useState<number>(0);

    return (
        <div className={flightContainer}>
            <div 
                className={flightComponent}
                style={assignInlineVars(themeVars, {
                    width: width,
                    height: height,
                    bg: lineColor,
                    primary: airPlaneBodyColor,
                    secondary: airPlaneWingsColor,
                    value: String(value),
                })}
            >
                <span>{departure}</span>
                <input 
                    type="range" 
                    className={flight}
                    value={value} 
                    min="0" 
                    max="100" 
                    onChange={(e) => setValue(+e.target.value)}
                    aria-label="percentage flown" 
                />
                <span>{arrival}</span>
            </div>
        </div>
    )
}

export default FlightSlider