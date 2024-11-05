import { createThemeContract, style } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
    color: {
      brand: null
    },
    font: {
      body: null
    }
});

export const card = style({
    position: 'relative',
    left: 0,
    width: 80,
    height: 160,
    padding: 8,
    borderRadius: 4,
    background: themeVars.color.brand,
    font: themeVars.font.body,
    transition: '0.4s ease-in-out',
    flex: 1,
    ':hover': {
        flex: 3,
        fontWeight: 'bold',
        cursor: 'pointer',
    }
})