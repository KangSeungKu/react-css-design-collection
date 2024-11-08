import WaveBanner3D from "../Banners/WaveBanner3D"
import { wrapper } from "./waveBanner3DGallery.css"

const WaveBanner3DGallery = () => {
  return (
    <>
        <div className={wrapper}>
            <WaveBanner3D />
        </div>
    </>
  )
}

export default WaveBanner3DGallery