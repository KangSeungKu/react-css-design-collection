import { createThemeContract, globalStyle, style } from "@vanilla-extract/css";

export const growCardThemeVars = createThemeContract({
    mouse: {
        x: null,
        y: null,
    },
    card: {
        blur: null,
        outer: null,
        backdrop: null,
        borderSize: null,
        borderRadius: null,
        backupBorder: null,
    },
    spotlight: {
        size: null,
        hue: null,
        saturation: null,
        lightness: null,
    },
    background: {
        spot: {
            opacity: null,
        },
        size: null,
    }
});

export const growCardArticle = style({
    aspectRatio: '3 / 4',
    borderRadius: growCardThemeVars.card.borderRadius,
    width: 260,
    position: 'relative',
    gridTemplateRows: '1fr auto',
    boxShadow: '0 1rem 2rem -1rem black',
    padding: '1rem',
    display: 'grid',
    border: '1px solid hsl(0 0% 100% / 0.15)',
    backdropFilter: `blur(${growCardThemeVars.card.blur})`,
    touchAction: 'none',
})

globalStyle(`${growCardArticle} *, ${growCardArticle} *::before, ${growCardArticle} *::after`, {
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: 0,
})

export const growCardBase = style({
    backgroundImage: `radial-gradient(
        ${growCardThemeVars.spotlight.size} ${growCardThemeVars.spotlight.size} at
        ${growCardThemeVars.mouse.x}
        ${growCardThemeVars.mouse.y},
        hsl(${growCardThemeVars.spotlight.hue} ${growCardThemeVars.spotlight.saturation} ${growCardThemeVars.spotlight.lightness} / 0.1),
        transparent
    )`,
    backgroundColor: growCardThemeVars.card.backdrop,
    backgroundSize: `${growCardThemeVars.background.size} ${growCardThemeVars.background.size}`,
    backgroundPosition: '50% 50%',
    backgroundAttachment: 'fixed',
    border: `${growCardThemeVars.card.borderSize} solid ${growCardThemeVars.card.backupBorder}`,
    position: 'relative',
    touchAction: 'none',
    '::before': {
        pointerEvents: 'none',
        content: "",
        position: 'absolute',
        inset: `calc(${growCardThemeVars.card.borderSize} * -1)`,
        border: `${growCardThemeVars.card.borderSize} solid transparent`,
        borderRadius: growCardThemeVars.card.borderRadius,
        backgroundAttachment: 'fixed',
        backgroundSize: `${growCardThemeVars.background.size} ${growCardThemeVars.background.size}`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        mask: `linear-gradient(transparent, transparent), linear-gradient(white, white)`,
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        backgroundImage: `radial-gradient(
            calc(${growCardThemeVars.spotlight.size} * 0.75) calc(${growCardThemeVars.spotlight.size} * 0.75) at
            ${growCardThemeVars.mouse.x}
            ${growCardThemeVars.mouse.y},
            hsl(${growCardThemeVars.spotlight.hue} ${growCardThemeVars.spotlight.saturation} 50% / ${growCardThemeVars.background.spot.opacity}),
            transparent 100%
        )`,
        filter: 'brightness(2)',
    },
    '::after': {
        pointerEvents: 'none',
        content: "",
        position: 'absolute',
        inset: `calc(${growCardThemeVars.card.borderSize} * -1)`,
        border: `${growCardThemeVars.card.borderSize} solid transparent`,
        borderRadius: growCardThemeVars.card.borderRadius,
        backgroundAttachment: 'fixed',
        backgroundSize: `${growCardThemeVars.background.size} ${growCardThemeVars.background.size}`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        mask: `linear-gradient(transparent, transparent), linear-gradient(white, white)`,
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        backgroundImage: `radial-gradient(
            calc(${growCardThemeVars.spotlight.size} * 0.5) calc(${growCardThemeVars.spotlight.size} * 0.5) at
            ${growCardThemeVars.mouse.x}
            ${growCardThemeVars.mouse.y},
            hsl(0 100% 100% / ${growCardThemeVars.background.spot.opacity}),
            transparent 100%
        )`,
    }
})

export const growCardFrame = style({
    position: 'absolute',
    inset: '0',
    willChange: 'filter',
    opacity: growCardThemeVars.card.outer,
    borderRadius: growCardThemeVars.card.borderRadius,
    borderWidth: `calc(${growCardThemeVars.card.borderSize} * 20)`,
    filter: `blur(calc(${growCardThemeVars.card.borderSize} * 10))`,
    background: 'none',
    pointerEvents: 'none',
    border: 'none',
    '::before': {
        inset: -10,
        borderWidth: 10,
    }
})

export const growCardButtonText = style({
    fontWeight: 'bold',
    backgroundImage: `radial-gradient(
        ${growCardThemeVars.spotlight.size} ${growCardThemeVars.spotlight.size} at
        ${growCardThemeVars.mouse.x}
        ${growCardThemeVars.mouse.y},
        hsl(${growCardThemeVars.spotlight.hue} ${growCardThemeVars.spotlight.saturation} ${growCardThemeVars.spotlight.lightness} / ${growCardThemeVars.background.spot.opacity}),
        transparent
    )`,
    backgroundColor: growCardThemeVars.card.backdrop,
    backgroundPosition: '50% 50%',
    backgroundAttachment: 'fixed',
    backgroundClip: 'text',
    filter: 'brightness(1.5)',
    color: 'transparent',
})

export const growCardButton = style({
    padding: '0.75rem 2rem',
    alignSelf: 'end',
    color: 'hsl(0 0% 80%)',
    border: 'none',
    borderRadius: growCardThemeVars.card.borderRadius,
})