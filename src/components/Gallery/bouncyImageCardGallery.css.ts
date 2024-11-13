import { createThemeContract, style } from "@vanilla-extract/css";

export const bouncyImageCardGalleryThemeVars = createThemeContract({
    gridTemplateColumns: null,
});

export const container = style({
    background: 'conic-gradient(from 0.5turn at bottom center, #add8e6, #fff)',
    blockSize: '100%',
})

export const cardsContainer = style({
    minBlockSize: '100%',
    display: 'grid',
    placeContent: 'center',
    padding: '1.5rem',
    gap: '1.5rem',
})

export const fieldSetArea = style({
    '@layer': {
        'demo': {
            gridTemplateColumns: bouncyImageCardGalleryThemeVars.gridTemplateColumns,
            '@media': {
                '(prefers-reduced-motion: no-preference)': {
                    transition: 'grid-template-columns 2s linear(0,0.01,0.04 1.6%,0.161 3.3%,0.816 9.4%,1.046,1.189 14.4%,1.231,1.254 17%,1.259,1.257 18.6%,1.236,1.194 22.3%,1.057 27%,0.999 29.4%,0.955 32.1%,0.942,0.935 34.9%,0.933,0.939 38.4%,1 47.3%,1.011,1.017 52.6%,1.016 56.4%,1 65.2%,0.996 70.2%,1.001 87.2%,1)',
                }
            },
        },
        'demo.support': {
            inlineSize: '80vw',
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateRows: '50vh',
            gap: '1rem',
            border: 'none',
        },
    }
})