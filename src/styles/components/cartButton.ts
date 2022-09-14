import { styled } from "..";

export const CartButtonContainer = styled('button', {
    background: "$gray800",
    borderRadius: 6,
    padding: '0.75rem',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    position: 'relative',

    '> span': {
        background: "$green500",

        position: 'absolute',
        top: -8,
        right: -8,
        borderRadius: 1000,
        width: '1.5rem',
        height: '1.5rem',

        fontSize: '0.875rem',
        color: "$white",
        fontWeight: 700,
        letterSpacing: '-0.06em',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    '&:hover': {
        filter: 'brightness(0.9)',
        transition: 'filter 0.2s',
    },
});