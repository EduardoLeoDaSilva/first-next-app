import { styled } from "..";

export const ProductContainer = styled('div', {
    display: 'grid',
    paddingRight: '4.5rem',
    gap: '4.5rem',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    gridTemplateAreas:
    `
     'image header'
     'image description'
     'image description'
    `
})

export const ImageContainer = styled('div', {
    gridArea: 'image',
    borderRadius: '0.5px',
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)'
})

export const HeaderContainer = styled('div', {
    gridArea: 'header',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    h1:{
        color: '$gray100',
        fontSize: '2rem',
        fontWeight: '700'
    },

    span: {
        color: '$green300',
        fontSize: '2rem'
    }
})

export const DescriptionContainer = styled('div', {
    gridArea: 'description',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",

    button: {
        backgroundColor: '$green500',
        color: '$gray100',
        border: 'none',
        borderRadius: '8px', 
        padding: '1.25rem 2rem',
        cursor: 'pointer',
        fontSize: '1.12rem',
        '&:hover': {
            backgroundColor: '$green300'
        }
    },

    p:{
        fontSize: '1.12rem',
        color: '$gray100'
    }

})
