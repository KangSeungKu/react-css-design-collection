import { assignInlineVars } from "@vanilla-extract/dynamic"
import BouncyImageCard from "../Cards/BouncyImageCard"
import { bouncyImageCardGalleryThemeVars, cardsContainer, container, fieldSetArea } from "./bouncyImageCardGallery.css"
import { useState } from "react"

const IMAGE_CARD_DATAS = [
    {
        id: 1,
        backgroundImage: "https://assets.codepen.io/2585/fiddle-leaf.jpeg",
    },
    {
        id: 2,
        backgroundImage: "https://assets.codepen.io/2585/pink-princess.jpeg",
    },
    {
        id: 3,
        backgroundImage: "https://assets.codepen.io/2585/kara-eads-zcVArTF8Frs-unsplash.jpg",
    },
    {
        id: 4,
        backgroundImage: "https://assets.codepen.io/2585/pothos.jpeg",
    },
    {
        id: 5,
        backgroundImage: "https://assets.codepen.io/2585/rubber-tree.webp",
    },
]

const BouncyImageCardGallery = () => {
    const [selectedCard, setSelectedCard] = useState<number>(3);

    const handleClickCard = (id: number) => {
        setSelectedCard(id);
    }

    return (<>
        <div className={container}>
            <div className={cardsContainer}>
                <fieldset className={fieldSetArea} style={assignInlineVars(bouncyImageCardGalleryThemeVars, {
                    gridTemplateColumns: getGridTemplateColumns(selectedCard, IMAGE_CARD_DATAS.length),
                })}>
                    {IMAGE_CARD_DATAS.map((data, idx) => 
                        <BouncyImageCard key={data.id} id={idx} backgroundImage={data.backgroundImage} onClickEvent={handleClickCard}/>
                    )}
                </fieldset>
            </div>
        </div>
    </>)
}

const getGridTemplateColumns = (selectedNumber: number, arrLength: number) => Array(arrLength).fill(1).reduce((arr, _, i) => {
    if (i === selectedNumber) {
    arr[i] = arrLength;  // 선택된 인덱스는 전체 개수로 설정
    } else if (i === selectedNumber - 1 || i === selectedNumber + 1) {
    arr[i] = (selectedNumber === 0 || selectedNumber === arrLength - 1) 
                ? Math.ceil(arrLength / 2) 
                : Math.floor(arrLength / 2);  // 양 끝일 때 반올림, 그 외 내림
    }
    return arr;
}, Array(arrLength).fill(1)).map((value: number) => value + 'fr').join(' ');

export default BouncyImageCardGallery