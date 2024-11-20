import { useState } from "react"
import BalanceSlider from "../../components/Buttons/BalanceSlider"
import SquishyButton from "../../components/Buttons/SquishyButton"
import WaveEffectButton from "../../components/Buttons/WaveEffectButton"
import TogglePillButtonsGallery from "../../components/Gallery/TogglePillButtonsGallery"
import { balanceSliderContainer, squishyButtonContainer, waveEffectButtonContainer } from "./buttonsPage.css"
import FlightSlider from "../../components/Buttons/FlightSlider"

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
    <div>
      <p>Flight Slide Animation</p>
      <FlightSlider departure="KOSPI" arrival="NASDAQ"/>
    </div>
  </>
  )
}

export default ButtonsPage