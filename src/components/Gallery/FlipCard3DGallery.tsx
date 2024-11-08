import FlipCard3D from "../Cards/FlipCard3D"
import { container } from "./flipCard3DGallery.css"
import bgImage from '/assets/background/3D_Flip_Card_Background_Image.jpg';

const FlipCard3DGallery = () => {
  return (
    <div className={container}>
        <FlipCard3D src={bgImage}/>
        <FlipCard3D src={bgImage} invertedOption/>
    </div>
  )
}

export default FlipCard3DGallery