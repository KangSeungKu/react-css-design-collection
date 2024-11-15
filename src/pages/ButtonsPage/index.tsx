import SquishyButton from "../../components/Buttons/SquishyButton"
import WaveEffectButton from "../../components/Buttons/WaveEffectButton"
import TogglePillButtonsGallery from "../../components/Gallery/TogglePillButtonsGallery"
import { squishyButtonContainer, waveEffectButtonContainer } from "./buttonsPage.css"

const ButtonsPage = () => {
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
  </>
  )
}

export default ButtonsPage