import { styled } from "..";

export const CartContainer = styled('div', {
    background: "$gray800",
    boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1,

    height: '100%',
    width: '30rem',

    padding: '3rem',
    paddingTop: '4.5rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const CartDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
});