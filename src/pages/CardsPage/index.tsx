import FlipCard3DGallery from "../../components/Gallery/FlipCard3DGallery"
import StretchesCardGallery from "../../components/Gallery/StretchesCardGallery"
import { container } from "./cardPage.css"

const CardsPage = () => {
  return (
    <div className={container}>
        <StretchesCardGallery />
        <FlipCard3DGallery />
    </div>
  )
}

export default CardsPage