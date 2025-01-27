import BouncyImageCardGallery from "../../components/Gallery/BouncyImageCardGallery"
import FlipCard3DGallery from "../../components/Gallery/FlipCard3DGallery"
import GrowCardGallery from "../../components/Gallery/GrowCardGallery"
import StretchesCardGallery from "../../components/Gallery/StretchesCardGallery"
import { container } from "./cardPage.css"

const CardsPage = () => {
  return (
    <div className={container}>
        <StretchesCardGallery />
        <FlipCard3DGallery />
        <BouncyImageCardGallery />
        <GrowCardGallery />
    </div>
  )
}

export default CardsPage