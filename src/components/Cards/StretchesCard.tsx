import { assignInlineVars } from "@vanilla-extract/dynamic";
import { card, themeVars } from "./stretchesCard.css";

interface Props {
    brandColor?: string;
    fontFamily?: string;
    name?: string;
}

const StretchesCard = ({
    brandColor = 'white',
    fontFamily = 'sans-serif',
    name = 'Card'
}: Props) => {
  return (
    <>
        <div className={card} style={assignInlineVars(themeVars, {
            color: { brand: brandColor },
            font: { body: fontFamily },
        })}>
            {name}
        </div>
    </>
  )
}

export default StretchesCard