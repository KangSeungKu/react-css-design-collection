import { faGear, faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import SquareAimPointButton from "../Buttons/SquareAimPointButton"
import { gallery } from "./squareAimPointButtonGallery.css"

interface ThemeItem {
    color: string;
    font: string;
    bg: string;
}

interface Theme {
    [key: string]: ThemeItem;
}

const theme: Theme = {
    first: { color: '#2483FF', font: 'sans-serif', bg: '#222' },
    second: { color: '#FFF200', font: 'sans-serif', bg: '#222' },
    third: { color: '#FF253F', font: 'sans-serif', bg: '#222' },
    fourth: { color: '#25D366', font: 'sans-serif', bg: '#222' },
    fifth: { color: '#F32EC8', font: 'sans-serif', bg: '#222' },
}

const SquareAimPointButtonGallery = () => {
  return (
    <div className={gallery}>
        <SquareAimPointButton brandColor={theme.first.color} backgroundColor={theme.first.bg}/>
        <SquareAimPointButton brandColor={theme.second.color} backgroundColor={theme.second.bg} icon={faUser} name="Profile"/>
        <SquareAimPointButton brandColor={theme.third.color} backgroundColor={theme.third.bg} icon={faHeart} name="Likes"/>
        <SquareAimPointButton brandColor={theme.fourth.color} backgroundColor={theme.fourth.bg} icon={faGear} name="Settings"/>
        <SquareAimPointButton brandColor={theme.fifth.color} backgroundColor={theme.fifth.bg} icon={faSearch} name="Search"/>
    </div>
  )
}

export default SquareAimPointButtonGallery