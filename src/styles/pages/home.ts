import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    minWidth: 540,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,
        
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        '> div': {
            display: 'flex',
            flexDirection: 'column',
            gap: 4,

            strong: {
                fontSize: '$lg',
                color: '$gray100',
            },
    
            span: {
                fontSize: '$xl',
                fontWeight: 'bold',
                color: '$green300',
            },
        },

    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
});

export const AddToCartContainer = styled('button', {
    background: "$green500",
    borderRadius: 6,
    padding: '0.75rem',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    position: 'relative',

    '&:hover': {
        filter: 'brightness(0.9)',
        transition: 'filter 0.2s',
    },
});