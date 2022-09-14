import { styled } from "..";

export const CartContainer = styled('div', {
    background: "$gray800",
    boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1,

    height: '100vh',
    width: '30rem',

    padding: '3rem',
    paddingTop: '4.5rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    transition: 'all 2s ease-out',

    h2: {
        color: "$gray100",
        fontSize: '1.25rem',
    },

    svg: {
        cursor: 'pointer',
        position: 'absolute',
        right: 24,
        top: 24,
    },
});

export const CartDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
});

export const CartSummary = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.6,

    button: {
        marginTop: '3.5rem',
    },
});

export const CartSummaryRow = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const Qtd = styled('span', {
    fontSize: '1rem',
});

export const QtdValue = styled('span', {
    fontSize: '1.125rem',
});

export const TotalValue = styled('strong', {
    fontSize: '1.125rem',
})

export const FinalPriceSpan = styled('strong', {
    fontSize: '1.5rem',
})