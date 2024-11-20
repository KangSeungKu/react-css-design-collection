import { createThemeContract, createVar, style } from "@vanilla-extract/css";

const scaleVar = createVar();
const shadowVar = createVar();
const shadowColorVar = createVar();
const shadowColorOpacityVar = createVar();

export const themeVars = createThemeContract({
    width: null,
    height: null,
    bg: null,
    primary: null,
    secondary: null,
    value: null,
});

export const flightContainer = style({
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2e5f9',
    padding: '80px 0',
})

export const flightComponent = style({
    width: themeVars.width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5em',
    fontFamily:  'Helvetica, Arial, sans-serif',
    fontWeight: '200',
    fontSize: '1.25rem',
})

// clamp(0.2, calc(1 - sin(pi * 38 / 100)), 0.4)
// rgb(0 0 0 / clamp(0.2, calc(1 - sin(pi * 38 / 100)), 0.4))
export const flight = style({
    vars: {
        [scaleVar]: `clamp(1, calc(1 + 0.5 * sin(pi * ${themeVars.value} / 100)), 2)`,
        [shadowVar]: `clamp(0.15em, calc(1em * sin(pi * ${themeVars.value} / 100)), 1em)`,
        [shadowColorOpacityVar]: `clamp(0.2, calc(1 - sin(pi * ${themeVars.value} / 100)), 0.4)`,
        [shadowColorVar]: `rgb(0 0 0 / ${shadowColorOpacityVar})`,
    },
    appearance: 'none',
    containerType: 'inline-size',
    flex: '1',
    height: themeVars.height,
    border: 'none',
    borderRadius: '10em',
    position: 'relative',
    background: 
        `radial-gradient(circle at 0.35em 50%, ${themeVars.bg} 0.35em, #0000 0) no-repeat,
        radial-gradient(circle at calc(100% - 0.35em) 50%, ${themeVars.bg} 0.35em, #0000 0) no-repeat,
        linear-gradient(#0000 45%, ${themeVars.bg} 0 55%, #0000 0) 50% 50% / 99% 100%,
        #f000`,
    WebkitPrintColorAdjust: 'exact',
    printColorAdjust: 'exact',
    '::before': {
        content: '',
        width: `calc(${themeVars.value} * 1%)`,
        minWidth: '0.5em',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        background: 
            `radial-gradient(circle at 0.35em 50%, #000 0.35em, #0000 0) no-repeat,
            linear-gradient(#0000 45%, #000 0 55%, #0000 0) 50% 50% / calc(100% - 1em) 100% no-repeat,
            #f000`,
    },
    '::after': {
        content: '',
        width: '100%',
        height: '12em',
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translate(0, -50%)',
        pointerEvents: 'none',
        background:
            `/* cloud 1 */
            radial-gradient(3% 20% at 50% 20%, #fff 40%, #0000 0),
            radial-gradient(3% 20% at 52.5% 13%, #fff 40%, #0000 0),
            radial-gradient(2% 20% at 51% 10%, #fff 40%, #0000 0),
            radial-gradient(2.5% 20% at 51.5% 27%, #fff 50%, #0000 0),
            radial-gradient(2% 20% at 53% 23%, #fff 60%, #0000 0),
            radial-gradient(4% 40% at 55% 20%, #fff 40%, #0000 0),
            /* cloud 2 */
            radial-gradient(3% 20% at 40% 80%, #fff 40%, #0000 0),
            radial-gradient(3% 20% at 42.5% 87%, #fff 40%, #0000 0),
            radial-gradient(2% 20% at 41% 90%, #fff 40%, #0000 0),
            radial-gradient(2.5% 20% at 41.5% 72%, #fff 50%, #0000 0),
            radial-gradient(2% 20% at 43% 73%, #fff 60%, #0000 0),
            radial-gradient(4% 40% at 40% 78%, #fff 40%, #0000 0)`,
        backgroundSize: '300% 100%',
        backgroundPosition: `calc(${themeVars.value} * 1%) 0`,
        WebkitMask: 'linear-gradient(90deg, #0000, #0008 35% 65%, #0000)',
        mask: 'linear-gradient(90deg, #0000, #0008 35% 65%, #0000)',
    },
    '::-webkit-slider-runnable-track': {
        height: '100%',
        position: 'relative',
        zIndex: '1',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
    },
    '::-webkit-slider-thumb': {
        WebkitAppearance: 'none',
        appearance: 'none',
        transform: `translateY(calc(-50% + ${themeVars.height} / 2)) scale(${scaleVar})`,
        width: '4em',
        aspectRatio: '1',
        pointerEvents: 'none',
        background: 
            `linear-gradient(${themeVars.secondary} 0 0) 2% 50% / 13% 2.5% no-repeat,
            /* main frame */
            conic-gradient(at -40% 50%, #0000 84.75deg, ${themeVars.primary} 85deg 95deg, #0000 95.25deg) 0 0 / 80% 100%,
            /* pilot */
            radial-gradient(closest-side circle at calc(100% - 0.85em) 50%, #9cf 0.3em, #0000 0),
            radial-gradient(20% 10% at 80% 50%, ${themeVars.primary} 99%, #0000),
            /* tail */
            conic-gradient(at 45% -45%, #0000 150deg, ${themeVars.secondary} 151deg 174deg, #0000 175deg) -50% 40% / 53% 20%,
            conic-gradient(at 45% 145%, #0000 5deg, ${themeVars.secondary} 6deg 29deg, #0000 30deg) -50% 60% / 53% 20%,
            /* wings */
            conic-gradient(at 38% -45%, #0000 158deg, ${themeVars.secondary} 158.5deg 174deg, #0000 174.5deg) 0 0 / 100% 50%,
            conic-gradient(at 38% 145%, #0000 5deg, ${themeVars.secondary} 5.5deg 21deg, #0000 21.5deg) 0 100% / 100% 50%,
            /* engines */
            radial-gradient(80% 50%, #000 99%, #0000) 51% 22% / 21% 11%,
            radial-gradient(80% 50%, #000 99%, #0000) 51% 78% / 21% 11%`,
        backgroundRepeat: 'no-repeat',
        borderRadius: '20% / 100%',
        filter: `drop-shadow(calc(${shadowVar} * 2) calc(${shadowVar} * 1.25) ${shadowVar} ${shadowColorVar})`,
        boxShadow: 'none',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
    },
    // Thumb for Firefox
    '::-moz-range-thumb': {
        WebkitAppearance: 'none',
        appearance: 'none',
        transform: `scale(${scaleVar})`,
        width: '4em',
        height: '4em',
        border: 'none',
        pointerEvents: 'none',
        background: 
            `linear-gradient(${themeVars.secondary} 0 0) 2% 50% / 13% 2.5% no-repeat,
            /* main frame */
            conic-gradient(at -40% 50%, #0000 84.75deg, ${themeVars.primary} 85deg 95deg, #0000 95.25deg) 0 0 / 80% 100%,
            /* pilot */
            radial-gradient(closest-side circle at calc(100% - 0.85em) 50%, #9cf 0.3em, #0000 0),
            radial-gradient(20% 10% at 80% 50%, ${themeVars.primary} 99%, #0000),
            /* tail */
            conic-gradient(at 45% -45%, #0000 150deg, ${themeVars.secondary} 151deg 174deg, #0000 175deg) -50% 40% / 53% 20%,
            conic-gradient(at 45% 145%, #0000 5deg, ${themeVars.secondary} 6deg 29deg, #0000 30deg) -50% 60% / 53% 20%,
            /* wings */
            conic-gradient(at 38% -45%, #0000 158deg, ${themeVars.secondary} 158.5deg 174deg, #0000 174.5deg) 0 0 / 100% 50%,
            conic-gradient(at 38% 145%, #0000 5deg, ${themeVars.secondary} 5.5deg 21deg, #0000 21.5deg) 0 100% / 100% 50%,
            /* engines */
            radial-gradient(80% 50%, #000 99%, #0000) 51% 22% / 21% 11%,
            radial-gradient(80% 50%, #000 99%, #0000) 51% 78% / 21% 11%`,
        backgroundRepeat: 'no-repeat',
        borderRadius: '20% / 100%',
        filter: `drop-shadow(calc(${shadowVar} * 2) calc(${shadowVar} * 1.25) ${shadowVar} ${shadowColorVar})`,
        boxShadow: 'none',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact',
    },
    '@media': {
        '(prefers-contrast: more)': {
            '::-webkit-slider-runnable-track': {
                border: '2px solid #666',
                height: '0',
            },
            '::-webkit-slider-thumb': {
                transform: `translateY(-50%) scale(${scaleVar})`,
                boxSizing: 'border-box',
                border: '2em solid Highlight',
                clipPath: `polygon(0.00% 47.00%,3.00% 46.62%,0.88% 31.62%,5.38% 31.25%,13.38% 45.75%,44.38% 42.50%,43.00% 29.50%,40.25% 29.00%,40.00% 21.50%,42.75% 20.88%,40.00% 0.00%,47.12% 0.12%,55.00% 19.88%,60.88% 19.88%,60.88% 29.12%,58.88% 29.38%,63.75% 40.62%,81.75% 39.75%,88.00% 40.38%,93.00% 42.00%,97.25% 44.38%,99.25% 46.62%,100.00% 50.00%,99.25% 53.38%,97.25% 55.62%,93.00% 58.00%,88.00% 59.62%,81.75% 60.25%,63.75% 59.38%,58.88% 70.62%,60.88% 70.88%,60.88% 80.12%,55.00% 80.12%,47.12% 100.00%,40.00% 100.00%,42.75% 79.12%,40.00% 78.50%,40.25% 71.00%,43.00% 70.50%,44.38% 57.50%,13.38% 54.25%,5.38% 68.75%,0.88% 68.38%,3.00% 53.38%,0.00% 53.00%)`,
            },
            '::-moz-range-track': {
                border: '2px solid #000',
                height: 0,
            },
            '::-moz-range-thumb': {
                boxSizing: 'border-box',
                border: '2em solid Highlight',
                clipPath: 'polygon(0.00% 47.00%,3.00% 46.62%,0.88% 31.62%,5.38% 31.25%,13.38% 45.75%,44.38% 42.50%,43.00% 29.50%,40.25% 29.00%,40.00% 21.50%,42.75% 20.88%,40.00% 0.00%,47.12% 0.12%,55.00% 19.88%,60.88% 19.88%,60.88% 29.12%,58.88% 29.38%,63.75% 40.62%,81.75% 39.75%,88.00% 40.38%,93.00% 42.00%,97.25% 44.38%,99.25% 46.62%,100.00% 50.00%,99.25% 53.38%,97.25% 55.62%,93.00% 58.00%,88.00% 59.62%,81.75% 60.25%,63.75% 59.38%,58.88% 70.62%,60.88% 70.88%,60.88% 80.12%,55.00% 80.12%,47.12% 100.00%,40.00% 100.00%,42.75% 79.12%,40.00% 78.50%,40.25% 71.00%,43.00% 70.50%,44.38% 57.50%,13.38% 54.25%,5.38% 68.75%,0.88% 68.38%,3.00% 53.38%,0.00% 53.00%)',
            },
        },
    },
    '@container': {
        '(max-width: 400px)': {
            '::after': {
                display: 'none',
            },
            '::-webkit-slider-thumb': {
                width: '3em',
                background:
                    `/* rotors */
                    radial-gradient(closest-side circle at 50% 50%, ${themeVars.secondary} 10%, #0001 11% 90%, #0000 91%) 100% 50% / 90% 90%,
                    radial-gradient(closest-side circle at 50% 50%, #0000 0 20%, #0001 0 40%, #0000 0 60%, #0001 0 80%, #0000 0) 100% 50% / 91% 91%,
                    /* main frame */
                    conic-gradient(at -65% 50%, #0000 84.75deg, ${themeVars.primary} 85deg 95deg, #0000 95.25deg) 0 0 / 80% 100%,
                    /* pilot */
                    radial-gradient(farthest-side circle at calc(100% - 0.5em) 50%, #9cf 0.4em, #0000 0),
                    radial-gradient(25% 20% at 75% 50%, ${themeVars.primary} 99%, #0000),
                    /* tail */
                    conic-gradient(at 45% -45%, #0000 150deg, ${themeVars.secondary} 151deg 174deg, #0000 175deg) -49% 40% / 53% 25%,
                    conic-gradient(at 45% 145%, #0000 5deg, ${themeVars.secondary} 6deg 29deg, #0000 30deg) -49% 60% / 53% 25%,
                    /* legs? */
                    linear-gradient(#000 0 0) 100% 33% / 60% 4%,
                    linear-gradient(#000 0 0) 100% 67% / 60% 4%`,
                backgroundRepeat: 'no-repeat',
            },
            '::-moz-range-thumb': {
                width: '3em',
                height: '3em',
                background:
                    `/* rotors */
                    radial-gradient(closest-side circle at 55% 50%, ${themeVars.secondary} 10%, #0001 11% 90%, #0000 91%),
                    radial-gradient(closest-side circle at 50% 50%, #0000 0 20%, #0001 0 40%, #0000 0 60%, #0001 0 80%, #0000 0) 50% 50% / 91% 91%,
                    /* main frame */
                    conic-gradient(at -65% 50%, #0000 84.75deg, ${themeVars.primary} 85deg 95deg, #0000 95.25deg) 0 0 / 80% 100%,
                    /* pilot */
                    radial-gradient(farthest-side circle at calc(100% - 0.5em) 50%, #9cf 0.4em, #0000 0),
                    radial-gradient(25% 20% at 75% 50%, ${themeVars.primary} 99%, #0000),
                    /* tail */
                    conic-gradient(at 45% -45%, #0000 150deg, ${themeVars.secondary} 151deg 174deg, #0000 175deg) -49% 40% / 53% 25%,
                    conic-gradient(at 45% 145%, #0000 5deg, ${themeVars.secondary} 6deg 29deg, #0000 30deg) -49% 60% / 53% 25%,
                    /* legs? */
                    linear-gradient(#000 0 0) 100% 33% / 60% 4%,
                    linear-gradient(#000 0 0) 100% 67% / 60% 4%`,
                backgroundRepeat: 'no-repeat',
            },
        },
    },
})