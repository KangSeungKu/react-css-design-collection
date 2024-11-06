import { ChangeEvent, useState } from "react"
import TogglePillButton from "../Buttons/TogglePillButton"
import { buttonsArea, fieldsetArea, legendArea } from "./togglePillButtonGallery.css"

const TogglePillButtonsGallery = () => {
    const [buttonsState, setButtonsState] = useState({
        slidePear: false,
        slideBanana: false,
        slideApple: false,
        slidePeach: false,
        growPear: false,
        growBanana: false,
        growApple: false,
        growPeach: false,
        bouncePear: false,
        bounceBanana: false,
        bounceApple: false,
        bouncePeach: false,
        disabledPear: false,
        disabledBanana: false,
        disabledApple: true,
        disabledPeach: true,
    })

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setButtonsState((prev) => ({
            ...prev,
            [e.target.name]: e.target.checked,
        }))
    }

    return (
        <div>
            <div className={fieldsetArea}>
                <p className={legendArea}>
                    Slide Animation (Default)
                </p>
                <div className={buttonsArea}>
                    <TogglePillButton type="slide" checked={buttonsState.slidePear} onChange={onChangeHandler}/>
                    <TogglePillButton type="slide" checked={buttonsState.slideBanana} onChange={onChangeHandler} brandColor="#fd5" value="Banana"/>
                    <TogglePillButton type="slide" checked={buttonsState.slideApple} onChange={onChangeHandler} brandColor="#f88" value="Apple"/>
                    <TogglePillButton type="slide" checked={buttonsState.slidePeach} onChange={onChangeHandler} brandColor="#fa3" value="Peach"/>
                </div>
            </div>
            <div className={fieldsetArea}>
                <p className={legendArea}>
                    Grow Animation
                </p>
                <div className={buttonsArea}>
                    <TogglePillButton type="grow" checked={buttonsState.growPear} onChange={onChangeHandler}/>
                    <TogglePillButton type="grow" checked={buttonsState.growBanana} onChange={onChangeHandler} brandColor="#fd5" value="Banana"/>
                    <TogglePillButton type="grow" checked={buttonsState.growApple} onChange={onChangeHandler} brandColor="#f88" value="Apple"/>
                    <TogglePillButton type="grow" checked={buttonsState.growPeach} onChange={onChangeHandler} brandColor="#fa3" value="Peach"/>
                </div>
            </div>
            <div className={fieldsetArea}>
                <p className={legendArea}>
                    Bounce Animation
                </p>
                <div className={buttonsArea}>
                    <TogglePillButton type="bounce" checked={buttonsState.bouncePear} onChange={onChangeHandler}/>
                    <TogglePillButton type="bounce" checked={buttonsState.bounceBanana} onChange={onChangeHandler} brandColor="#fd5" value="Banana"/>
                    <TogglePillButton type="bounce" checked={buttonsState.bounceApple} onChange={onChangeHandler} brandColor="#f88" value="Apple"/>
                    <TogglePillButton type="bounce" checked={buttonsState.bouncePeach} onChange={onChangeHandler} brandColor="#fa3" value="Peach"/>
                </div>
            </div>
            <div className={fieldsetArea}>
                <p className={legendArea}>
                    Disabled Styles
                </p>
                <div className={buttonsArea}>
                    <TogglePillButton type="disabled" checked={buttonsState.disabledPear} onChange={onChangeHandler} disabled/>
                    <TogglePillButton type="disabled" checked={buttonsState.disabledBanana} onChange={onChangeHandler} brandColor="#fd5" value="Banana" disabled/>
                    <TogglePillButton type="disabled" checked={buttonsState.disabledApple} onChange={onChangeHandler} brandColor="#f88" value="Apple" disabled/>
                    <TogglePillButton type="disabled" checked={buttonsState.disabledPeach} onChange={onChangeHandler} brandColor="#fa3" value="Peach" disabled/>
                </div>
            </div>
        </div>
    )
}

export default TogglePillButtonsGallery