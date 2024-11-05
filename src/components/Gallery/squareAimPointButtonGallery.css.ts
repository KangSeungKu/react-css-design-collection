import { style } from "@vanilla-extract/css";

export const gallery = style({
    width: '100%',
    height: 200,
    display: "flex",
    // gap: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 8,
    marginTop: 16,
})