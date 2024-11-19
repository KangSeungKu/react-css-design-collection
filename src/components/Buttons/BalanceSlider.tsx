import { assignInlineVars } from "@vanilla-extract/dynamic"
import { controlFill, controlIndicator, controlTrack, controlTrackSlide, range, sliderControl, srOnly, themeVars, tooltip, toolTipDynamicVar, valueDynamicVar } from "./balanceSlider.css"

interface Props {
  value: number;
  setValue: (value: number) => void;
}
const BalanceSlider = ({
  value = 86,
  setValue
}: Props) => {
  return (
    <div 
      className={sliderControl} 
      style={assignInlineVars(themeVars, {
        shift: 40 < value && value < 68 ? '1' : '0',
        value: String(value),
        speed: '0.65s',
      })}
    >
      <input className={range} type="range" min="0" max="100" value="86" onChange={(e) => setValue(+e.target.value)} />
      <div 
        aria-hidden="true" 
        className={tooltip}
        style={assignInlineVars(toolTipDynamicVar, {
          left: {
            range: `${70 - (value / 100 * 10)}%`,
          },
          right: {
            range: `${50 - (value / 100 * 10)}%`,
          }
        })}
      ></div>
      <label className={srOnly}>Coffee to Milk Ratio</label>
      <div className={controlTrack}>
        <div className={controlTrackSlide}>
          <div className={controlFill} style={assignInlineVars(valueDynamicVar, {
            sort: `hsl(24 74% calc(24% + (30% * ((100 - ${value}) / 100)) / 1) / 0.4)`,
            position: {
              left: 'unset',
              right: 'calc(50% + 0.5rem)',
            },
          })}></div>
          <div className={controlIndicator}></div>
          <div className={controlFill} style={assignInlineVars(valueDynamicVar, {
            sort: `hsl(0 0% 100% / calc(0.1 + (0.4 * ((100 - ${value}) / 100))))`,
            position: {
              left: 'calc(50% + 0.5rem)',
              right: 'unset',
            },
          })}></div>
        </div>
      </div>
    </div>
  )
}

export default BalanceSlider