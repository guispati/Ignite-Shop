import { styled } from "..";

export const CartItemContainer = styled('div', {
    display: 'flex',
    gap: '1.25rem',
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 94,
    height: 94,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },
});

export const CartItemDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h3: {
        fontSize: '1.125rem',
        fontWeight: 400,
        color: "$gray300",
    },

    strong: {
        fontSize: '1.125rem',
        color: "$gray100",
    },

    a: {
        fontWeight: 700,
        color: "$green500",
        cursor: 'pointer',
    },
});