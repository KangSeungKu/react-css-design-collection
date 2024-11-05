import StretchesCard from "../Cards/StretchesCard";
import { gallery } from "./stretchesCardGallery.css";

interface ThemeItem {
    color: string;
    font: string;
}

interface Theme {
    [key: string]: ThemeItem;
}

const theme: Theme = {
    first: { color: '#B881FF', font: 'sans-serif' },
    second: { color: '#FF9950', font: 'sans-serif' },
    third: { color: '#AAEC8A', font: 'sans-serif' },
    fourth: { color: '#ED6A8A', font: 'sans-serif' },
    fifth: { color: '#99C2FE', font: 'sans-serif' },
}

const StretchesCardGallery = () => {
  return (
    <div className={gallery}>
        <StretchesCard brandColor='#B881FF' name='Card 1'/>
        <StretchesCard brandColor={theme.second.color} name='Card 2'/>
        <StretchesCard brandColor={theme.third.color} name='Card 3'/>
        <StretchesCard brandColor={theme.fourth.color} name='Card 4'/>
        <StretchesCard brandColor={theme.fifth.color} name='Card 5'/>
    </div>
  )
}

export default StretchesCardGallery