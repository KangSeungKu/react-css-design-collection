import { assignInlineVars } from "@vanilla-extract/dynamic";
import { aimFrame, effectFrame, iconWithEffect, textWithEffect, themeVars } from "./squareAimPointButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
    brandColor?: string;
    backgroundColor?: string;
    fontFamily?: string;
    name?: string;
    icon?: IconDefinition
}

const SquareAimPointButton = ({
    brandColor = 'white',
    backgroundColor = 'white',
    fontFamily = 'Arial',
    name = 'Home',
    icon = faHome,
}: Props) => {
  return (
    <div 
        className={aimFrame}
        style={assignInlineVars(themeVars, {
            color: { brand: brandColor, background: backgroundColor },
            font: { body: fontFamily }
        })}
    >
        <div className={effectFrame}>
            <FontAwesomeIcon className={iconWithEffect} icon={icon}/>
        
            <span 
                className={textWithEffect}
                style={assignInlineVars(themeVars, {
                    color: { brand: brandColor, background: backgroundColor },
                    font: { body: fontFamily }
                })}
            >
                {name}
            </span>
        </div>
    </div>
  )
}

export default SquareAimPointButton