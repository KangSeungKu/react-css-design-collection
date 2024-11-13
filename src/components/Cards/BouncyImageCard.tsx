import { assignInlineVars } from "@vanilla-extract/dynamic"
import { bouncyImageCardThemeVars, fieldSetInput, fieldSetLabel } from "./bouncyImageCard.css"

interface Props {
    id: number;
    backgroundImage?: string;
    onClickEvent?: (id: number) => void;
}
const BouncyImageCard = ({
    id,
    backgroundImage,
    onClickEvent = (id) => id,
}: Props) => {
    return (<>
            <label className={fieldSetLabel} style={assignInlineVars(bouncyImageCardThemeVars, {
                background: {
                    image: backgroundImage ? `url(${backgroundImage})` : 'none',
                }
            })}>
                <input 
                    className={fieldSetInput} 
                    type="radio" 
                    onClick={() => onClickEvent(id)}/>
            </label>
    </>)
}

export default BouncyImageCard