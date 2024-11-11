import cane from "/assets/background/cane.svg"
import labels from "/assets/label/Labels.jpg"
import appleOne from "/assets/background/apple-one.png"
import appleTwo from "/assets/background/apple-two.png"
import appleThree from "/assets/background/apple-three.png"
import appleFour from "/assets/background/apple-four.png"
import exoticOne from "/assets/background/exotic-one.png"
import exoticTwo from "/assets/background/exotic-two.png"
import exoticThree from "/assets/background/exotic-three.png"
import exoticFour from "/assets/background/exotic-four.png"
import pearOne from "/assets/background/pear-one.png"
import pearTwo from "/assets/background/pear-two.png"
import pearThree from "/assets/background/pear-three.png"
import pearFour from "/assets/background/pear-four.png"
import * as gsapSliderStyle from "./gsapSlider.css"
import clsx from "clsx"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { useState } from "react"
import WaveEffectButton from "../Buttons/WaveEffectButton"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const MAX_PAGE_SIZE = 3;

interface SliderData {
    label: string,
    logoColor: string,
    buttonColor: string,
    waveColor: string,
}

interface Props {
    data: SliderData[],
}

const GSAPSlider = ({
    data,
}: Props) => {
    const [page, setPage] = useState<number>(0);

    useGSAP(() => {
        gsap.from(`.${gsapSliderStyle.fruitsImages}`, { y: "-100vh", delay: 0.5 });
        gsap.to(`.${gsapSliderStyle.fruitsImages} img`, {
            x: "random(-20, 20)",
            y: "random(-20, 20)",
            zIndex: 22,
            duration: 2,
            ease: "none",
            yoyo: true,
            repeat: -1
        })
    })

    const handleNextButton = () => {
        setPage(prev => prev + 1);
        gsap.from(`.${gsapSliderStyle.backgroundText}`, { y: "20%", opacity: 0, duration: 0.5 });
        gsap.from(`.${gsapSliderStyle.fruitsImages}`, { y: "-100vh", delay: 0.4, duration: 0.4 });
    }

    const handlePrevButton = () => {
        setPage(prev => prev - 1);
        gsap.from(`.${gsapSliderStyle.backgroundText}`, { y: "20%", opacity: 0, duration: 0.5 });
        gsap.from(`.${gsapSliderStyle.fruitsImages}`, { y: "100vh", delay: 0.5 });
    }

  return (<>
    <div className={gsapSliderStyle.gsapContainer} style={assignInlineVars(gsapSliderStyle.themeVars, {
        canLabel: { left: `${String(page * -100)}%` },
        background: { left: `${String(page * -100)}%` },
        logo: { color: data[page].logoColor },
    })}>
        <div className={gsapSliderStyle.titleFrame}>
            <h2 className={clsx(gsapSliderStyle.title, gsapSliderStyle.logo)}>Fruity</h2>
        </div>
        <div>
            {/* Button */}
            <div>
            {page > 0 && 
                <WaveEffectButton 
                    fontColor={data[page - 1]?.buttonColor}
                    waveColor={data[page - 1]?.waveColor}
                    position='absolute'
                    top="50%"
                    left="30px"
                    onClick={handlePrevButton} 
                />
            }
            {page + 1 < MAX_PAGE_SIZE && 
                <WaveEffectButton 
                    icon={faChevronRight} 
                    fontColor={data[page + 1]?.buttonColor}
                    waveColor={data[page + 1]?.waveColor}
                    position='absolute'
                    top="50%"
                    right="30px"
                    onClick={handleNextButton}
                />
            }
            </div>
            {/* Fixed Section */}
            <div>
                <h1 className={gsapSliderStyle.backgroundText}>{data[page].label}</h1>
                <div className={gsapSliderStyle.caneImage}>
                    <img className={gsapSliderStyle.caneImageInnerImage} src={cane} alt=""/>
                    <img className={clsx(gsapSliderStyle.caneImageInnerImage, gsapSliderStyle.caneLabels)} src={labels} alt=""/>
                </div>
            </div>
            {/* Fixed Section End */}
            {/* Fruits Images Section */}
            <div className={gsapSliderStyle.sectionContainerMain}>
            <div className={gsapSliderStyle.sectionContainer}>
                <section className={gsapSliderStyle.section}>
                <div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageOne)}><img src={pearOne} alt="pear-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageTwo)}><img src={pearTwo} alt="pear-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageThree)}><img src={pearThree} alt="pear-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageFour)}><img src={pearFour} alt="pear-image"/></div>
                </div>
                </section>
                <section className={gsapSliderStyle.section}>
                <div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageOne)}><img src={appleOne} alt="apple-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageTwo)}><img src={appleTwo} alt="apple-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageThree)}><img src={appleThree} alt="apple-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageFour)}><img src={appleFour} alt="apple-image"/></div>
                </div>
                </section>
                <section className={gsapSliderStyle.section}>
                <div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageOne)}><img src={exoticOne} alt="exotic-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageTwo)}><img src={exoticTwo} alt="exotic-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageThree)}><img src={exoticThree} alt="exotic-image"/></div>
                    <div className={clsx(gsapSliderStyle.fruitsImages, gsapSliderStyle.imageFour)}><img src={exoticFour} alt="exotic-image"/></div>
                </div>
                </section>
            </div>
            </div>
        </div>
    </div>
  </>)
}

export default GSAPSlider