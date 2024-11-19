import { createThemeContract, createVar, globalFontFace, globalStyle, style } from "@vanilla-extract/css";

const timingVar = createVar();
const activeVar = createVar();

export const themeVars = createThemeContract({
    shift: null,
    value: null,
    speed: null,
});

export const toolTipDynamicVar = createThemeContract({
    left: {
        range: null,
    },
    right: {
        range: null,
    },
})

export const valueDynamicVar = createThemeContract({
    sort: null,
    position: {
        right: null,
        left: null,
    },
})

globalFontFace('Geist Sans', {
    src: "url('https://assets.codepen.io/605876/GeistVF.ttf') format('truetype')",
})

export const sliderControl = style({
    vars: {
        [activeVar]: '0',
        [timingVar]: `linear(
            0,
            0.5007 7.21%,
            0.7803 12.29%,
            0.8883 14.93%,
            0.9724 17.63%,
            1.0343 20.44%,
            1.0754 23.44%,
            1.0898 25.22%,
            1.0984 27.11%,
            1.1014 29.15%,
            1.0989 31.4%,
            1.0854 35.23%,
            1.0196 48.86%,
            1.0043 54.06%,
            0.9956 59.6%,
            0.9925 68.11%,
            1
        )`,
    },
    width: 300,
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    margin: '0 auto',
    containerType: 'inline-size',
    ':hover': {
        vars: {
            [activeVar]: '1',
        }
    },
    ':focus-within': {
        vars:{
            [activeVar]: '1',
        }
    },
})

globalStyle(`${sliderControl} :is(*, :before, :after)`, {
    boxSizing: 'border-box',
})

export const srOnly = style({
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
})

export const range = style({
    width: 300,
    opacity: '0',
    height: 60,
    ':hover': {
        cursor: '-webkit-grab',
    },
    ':active': {
        cursor: '-webkit-grabbing',
    },
    ':focus-visible': {
        outlineOffset: '0.25rem',
        outlineColor: 'transparent',
    },
    '::-webkit-slider-thumb': {
        appearance: 'none',
        WebkitAppearance: 'none',
        height: 60,
        width: 40,
        marginTop: 0,
        opacity: '1',
    },
    '::-webkit-slider-runnable-track': {
        WebkitAppearance: 'none',
        height: 60,
        marginTop: 0,
        boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
    },
    '::-moz-range-track': {
        height: 60,
        marginTop: 0,
        boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
    }
})

export const tooltip = style({
    '@layer': {
        'foundation': {
            fontSize: '1rem',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '50%',
            pointerEvents: 'none',
            transform: `translateY(calc(${themeVars.shift} * 50%))`,
            transition: `transform ${themeVars.speed} ${timingVar}`,
            zIndex: '2',
            '::before': {
                fontVariant: 'tabular-nums',
                position: 'absolute',
                top: '50%',
                translate: '0 -50%',
                fontWeight: '100',
                color: 'white',
                fontFamily: 'Geist Sans',
            },
            '::after': {
                fontVariant: 'tabular-nums',
                position: 'absolute',
                top: '50%',
                translate: '0 -50%',
                fontWeight: '100',
                color: 'white',
                fontFamily: 'Geist Sans',
            }
        },
        'tip': {
            counterSet: `low ${themeVars.value} high calc(100 - ${themeVars.value})`,
            zIndex: '6',
            '::before': {
                color: 'hsl(24 74% 54%)',
                content: `'COFFEE ' counter(low) '%'`,
                mask: `linear-gradient(
                    90deg,
                    hsl(0 0% 100% / 0.6) ${toolTipDynamicVar.left.range},
                    hsl(0 0% 100% / 1) ${toolTipDynamicVar.left.range}
                )`,
                left: '0.5rem',
            },
            '::after': {
                content: `counter(high) '% MILK'`,
                mask: `linear-gradient(
                    90deg,
                    hsl(0 0% 100% / 1) ${toolTipDynamicVar.right.range},
                    hsl(0 0% 100% / 0.5) ${toolTipDynamicVar.right.range}
                )`,
                right: '0.5rem',
            }
        }
    }
})

export const controlTrack = style({
    height: `calc(50% + (${themeVars.shift} * 50%))`,
    width: '100%',
    position: 'absolute',
    bottom: '0',
    pointerEvents: 'none',
    transition: `height ${themeVars.speed} ${timingVar}`,
    zIndex: 5,
    clipPath: 'inset(0 -0.25rem 0 -0.25rem round 6px)',
})

export const controlTrackSlide = style({
    height: '100%',
    width: '100%',
    position: 'relative',
    translate: `calc(-50% + (${themeVars.value} * 1cqi)) 0`,
    transition: `translate 0.1s`,
})

export const controlFill = style({
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 6,
    background: valueDynamicVar.sort,
    left: valueDynamicVar.position.left,
    right: valueDynamicVar.position.right,
})

export const controlIndicator = style({
    height: '75%',
    borderRadius: 4,
    width: 4,
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: `hsl(0 0% 100% / calc((${activeVar} * 0.5) + 0.5))`,
    zIndex: '2',
    translate: '-50% -50%',
})