import { createThemeContract, style } from "@vanilla-extract/css";

export const bouncyImageCardThemeVars = createThemeContract({
    background: {
        image: null,
    },
});

export const fieldSetLabel = style({
    '@layer': {
        'demo': {
            backgroundImage: bouncyImageCardThemeVars.background.image,
            backgroundPosition: 'center',
            backgroundSize: 'auto 125%',
        },
        'demo.support': {
            cursor: 'pointer',
            borderRadius: '2rem',
            ':focus-within': {
                outline: '1px solid green',
                outlineOffset: 5,
            }
        }
    }
})

export const fieldSetInput = style({
    '@layer': {
        'demo.support': {
            opacity: 0,
        }
    }
})