import { createVar, style } from "@vanilla-extract/css";

export const waveEffectButtonContainer = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
    paddingLeft: "100px",
})

export const squishyButtonContainer = style({
    fontFamily: 'sans-serif',
    display: 'flex',
    padding: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ece9e4',
    fontSize: '1rem',
})

const sizeVar= createVar();
const lineVar = createVar();

export const balanceSliderContainer = style({
    vars: {
        [sizeVar]: '45px',
        [lineVar]: 'color-mix(in lch, canvasText, transparent 70%)',
    },
    display: 'flex',
    width: '100%',
    height: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#313131',
})