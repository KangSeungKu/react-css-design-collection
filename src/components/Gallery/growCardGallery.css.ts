import { globalStyle, style } from "@vanilla-extract/css";


export const growCardContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 0',
    overflow: 'hidden',
    background: 'hsl(0 0% 4%)',
})

export const growCardMain = style({
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120ch',
    maxWidth: 'calc(100vw - 2rem)',
    position: 'relative',
})

globalStyle(`${growCardContainer} is(*, *:after, *:before) `, {
    boxSizing: 'border-box',
})