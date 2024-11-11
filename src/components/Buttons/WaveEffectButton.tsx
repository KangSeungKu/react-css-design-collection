import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { buttonStyle, themeVars, wave } from "./waveEffectButton.css"
import clsx from "clsx"
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
    icon?: IconProp;
    backgroundColor?: string;
    fontColor?: string;
    waveColor?: string;
    position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    onClick?: () => void;
}

const WaveEffectButton = ({
    icon = faChevronLeft,
    backgroundColor = '#FFFFFF',
    fontColor = '#000000',
    waveColor = '#000000',
    position = 'static',
    top = 'unset',
    right = 'unset',
    bottom = 'unset',
    left = 'unset',
    onClick = () => {},
}: Props) => {
    return (<>
        <button 
            className={clsx(buttonStyle, wave)} 
            style={assignInlineVars(themeVars, {
                backgroundColor: backgroundColor,
                fontColor: fontColor,
                waveColor: waveColor,
                location: {
                    position: position,
                    top: top,
                    right: right,
                    bottom: bottom,
                    left: left,
                },
            })} 
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon}/>
        </button>
    </>)
}

export default WaveEffectButton