import { useState } from "react"
import BalanceSlider from "../../components/Buttons/BalanceSlider"
import SquishyButton from "../../components/Buttons/SquishyButton"
import WaveEffectButton from "../../components/Buttons/WaveEffectButton"
import TogglePillButtonsGallery from "../../components/Gallery/TogglePillButtonsGallery"
import { balanceSliderContainer, squishyButtonContainer, waveEffectButtonContainer } from "./buttonsPage.css"

const ButtonsPage = () => {
  const [sliderValue, setSliderValue] = useState<number>(86);

  return (<>
    <TogglePillButtonsGallery />
    <div>
      <p>Wave Animation</p>
      <div className={waveEffectButtonContainer}>
        <WaveEffectButton/>
      </div>
    </div>
    <div>
      <p>Squishy Animation</p>
      <div className={squishyButtonContainer}>
        <SquishyButton text={'Squishy'}/>
      </div>
    </div>
    <div>
      <p>Balance Slide Animation</p>
      <div className={balanceSliderContainer}>
        <BalanceSlider value={sliderValue} setValue={setSliderValue}/>
      </div>
    </div>
  </>
  )
}

export default ButtonsPage