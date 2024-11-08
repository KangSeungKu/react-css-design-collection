import clsx from "clsx"
import { card, cardContent, cardFrame, cardTitle, contentBox, date, dateBox, dateBoxContent, flipCardThemeVars, hueInvert, month, seeMore } from "./flipCard3D.css"
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
    src?: string;
    invertedOption?: boolean;
}

const FlipCard3D = ({
    src = '',
    invertedOption = false,
}: Props) => {
  return (
    <div className={clsx(cardFrame, {
        [hueInvert]: invertedOption,
    })}>
        <div className={card} style={assignInlineVars(flipCardThemeVars, {
            background: { src: `url(${src})` }
        })}>
            <div className={contentBox}>
                <h1 className={cardTitle}>Card Title</h1>
                <p className={cardContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum non consectetur commodi aspernatur nisi repellendus cumque ab quaerat ad harum asperiores praesentium, distinctio fugiat quisquam sed quis voluptatibus, quam esse</p>
                <span className={seeMore}>See More</span>
            </div>
            <div className={dateBox}>
                <span className={clsx(dateBoxContent, month)}>Neon</span>
                <span className={clsx(dateBoxContent, date)}>3D</span>    
            </div>
        </div>
    </div>
  )
}

export default FlipCard3D