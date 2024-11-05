import { createThemeContract, style } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
    color: {
      brand: null,
      background: null,
    },
    font: {
      body: null
    }
});

export const aimFrame = style({
    position: 'relative',
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.5s',
    ':before': {
        content: '',
        position: 'absolute',
        inset: 30,
        boxShadow: `
            0 0 0 10px ${themeVars.color.brand},
            0 0 0 20px ${themeVars.color.background},
            0 0 0 22px ${themeVars.color.brand}
        `,
        transition: '0.5s',
    },
    ':after': {
        content: '',
        position: 'absolute',
        inset: 0,
        backgroundColor: themeVars.color.background,
        transform: 'rotate(45deg)',
        transition: '0.5s',
    },
    selectors: {
        '&:hover::before': {
            inset: 15,
        },
        '&:hover::after': {
            inset: 0,
            transform: 'rotate(0deg)',
        }
    }
})

export const effectFrame = style({
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const iconWithEffect = style({
    opacity: 1,
    color: themeVars.color.brand,
    fontSize: '2em',
    transition: '0.5s',
    selectors: {
        [`${aimFrame}:hover ${effectFrame} &`]: {
            color: themeVars.color.brand,
            transform: 'translateY(-40%)',
            filter: `
                drop-shadow(0 0 20px ${themeVars.color.brand})
                drop-shadow(0 0 40px ${themeVars.color.brand})
                drop-shadow(0 0 60px ${themeVars.color.brand})
            `
        },
    }
})

export const textWithEffect = style({
    position: 'absolute',
    color: themeVars.color.brand,
    fontFamily: themeVars.font.body,
    transition: '0.5s',
    transform: 'scale(0) translateY(200%)',
    opacity: 0,
    filter: `
        drop-shadow(0 0 20px ${themeVars.color.brand})
        drop-shadow(0 0 40px ${themeVars.color.brand})
        drop-shadow(0 0 60px ${themeVars.color.brand})
    `,
    selectors: {
        [`${aimFrame}:hover &`]: {
            opacity: 1,
            transform: 'scale(1) translateY(100%)',
        }
    }
})