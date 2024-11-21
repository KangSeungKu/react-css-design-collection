import { createThemeContract, fallbackVar, globalStyle, style } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
    primaryColor: null,
    cover: null,
});

export const container = style({
    padding: 0,
    margin: 0,
    height: '100vh',
})

globalStyle(`${container} *`, {
    fontFamily: '"Poppins", sans-serif',
    color: 'white',
})

export const cAccordion = style({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    height: '100%',
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
});

export const item = style({
    background: fallbackVar(themeVars.cover, themeVars.primaryColor),
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundColor: themeVars.primaryColor,
    backgroundBlendMode: 'linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%)',
    position: 'relative',
    flexGrow: '1',
    height: '100%',
    width: 100,
    minWidth: '2.05rem',
    transition: 'all .3s ease-in-out',
    ':hover': {
        flexGrow: '2',
        width: '50%',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    selectors: {
        '&:focus-within, &:target': {
            flexGrow: '2',
            width: '50%',
            backgroundColor: 'transparent',
        }
    }
})

export const titleHoverHide = style({
    selectors: {
        [`${item}:is(:hover, :focus-within, :target) &`]: {
            maxHeight: 0,
            opacity: '0',
        },
    },
})

export const titleHoverShow = style({
    opacity: '0',
    width: '100%',
    selectors: {
        [`${item}:is(:hover, :focus-within, :target) &`]: {
            opacity: '1',
        },
    },
})

export const titleHero = style({
    fontSize: '4rem',
    lineHeight: '100%',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginLeft: '-145px !important',
})

export const action = style({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 15, 15, 0.75)',
    background: 'linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%)',
    textDecoration: 'none',
})

export const title = style({
    color: 'white',
    fontFamily: "Roboto Condensed",
    margin: '0',
    maxHeight: '100%',
    transition: 'all .3s ease-in-out',
    overflow: 'hidden',
})


export const aside = style({
    padding: '1rem',
    position: 'absolute',
    height: '100%',
    right: '1rem',
    bottom: '0',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    ':before': {
        content: '+',
        color: '#fff',
        marginBottom: '1rem',
        fontSize: '2rem',
        display: 'inline-block',
    },
    ':after': {
        content: '',
        flexGrow: 1,
        width: 1,
        display: 'block',
        marginTop: '1rem',
        backgroundColor: 'rgba(255, 255, 255, .2)',
    },
})

export const content = style({
    padding: '24rem 4.5rem 0rem 8rem',
    width: '55%',
    textAlign: 'left',
    lineHeight: 4,
    fontSize: 16,
    left: '-50rem'
})

export const description = style({
    color: 'white',
    fontWeight: '500',
    lineHeight: '120%',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100%',
    opacity: '0',
    transition: 'all .3s ease-in-out',
    marginLeft: -145,
    width: '85%',
    selectors: {
        [`${item}:is(:hover, :focus-within, :target) &`]: {
            opacity: '1',
        }
    }
})


// $component: '.c-accordion';

// :root {
//  font-family: "Poppins", sans-serif;
//    color: #fff;

 
//  --color-primary: #3E66A0;
 
 
//  --cover-placeholder: var(--color-primary);
// }

// body {
//  padding: 0;
//  margin: 0;
//  height: 100vh;
// }

// #{$component} {
//  list-style: none;
//  padding: 0;
//  margin: 0;
//  height: 100%;
//  display: flex;
//  flex: 1 1 auto;
//  overflow: hidden;
//  &__item {
//   --cover: var(--cover-placeholder);
//   background: var(--cover);
//   background-position: center center;
//   background-size: cover;
//   background-color: var(--cover-placeholder);
//   background-blend-mode: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
  
//   position: relative;
//   flex-grow: 1;
//   height: 100%;
//   width: 100px;
//   min-width: 2.05rem;
//   transition: all .3s ease-in-out;
 
  
//   &:hover, &:focus-within, &:target {
//    _flex-grow: 2;
//    width: 50%;
//    background-color: transparent;
   
//    #{$component} {
//     &__title {
//      &--hover-hide {
//       max-height: 0;
//       opacity: 0;
//      }
//      &--hover-show {
//       opacity: 1;
//      }
//     }
//     &__description {
//      opacity: 1;
//     }
//    }
//   }
  
//   &:hover {
//    cursor: pointer;
//   }
//  }
//  &__action {
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(15, 15, 15, 0.75);
//   background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
//   text-decoration: none;
//  }
//  &__title {
//   color: white;
//   font-family: "Roboto Condensed";
//   margin: 0;
//   max-height: 100%;
//   transition: all .3s ease-in-out;
//   overflow: hidden;
//   &--hover-show {
//    opacity: 0;
//    width: 100%;
 
//   }
//   &--hero {
//    font-size: 4rem;
//    line-height: 100%;
//    font-weight: 700;
//   text-transform: uppercase;
//    margin-left: -145px;
//   }
//  }
//  &__aside {
//   padding: 1rem;
//   position: absolute;
//   height: 100%;
//   right: 1rem;
//   bottom: 0;
//   writing-mode: vertical-rl;
//   transform: rotate(180deg);
//   display: flex;
//   align-items: center;
//   flex-wrap: nowrap;
//   white-space: nowrap;
//   &:before {
//    content: '+';
//    color: #fff;
//    margin-bottom: 1rem;
//    font-size: 2rem;
//    display: inline-block;
//   }
//   &:after {
//    content: '';
//    flex-grow: 1;
//    width: 1px;
//    display: block;
//    margin-top: 1rem;
//    background-color: rgba(255, 255, 255, .2);
//   }
//  }
// &__content {
// padding: 24rem 4.5rem 0rem 8rem;
//   width: 55%;
//   text-align: left;
//    line-height: 4px;
//   font-size: 16px;
  
//   left: -50rem;

//  }
//  &__description {
//   color: white;
//   font-weight: 500;
//   line-height: 120%;
//   overflow-y: auto;
//   overflow-x: hidden;
//   height: 100%;
//   opacity: 0;
//   transition: all .3s ease-in-out;
//   margin-left: -145px;
//   width: 85%;
 
//  }
// }


