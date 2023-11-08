import { styled } from "..";

export const HomeContainer = styled('main',{
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    width: '100%',
    display: 'flex',
    marginLeft: 'auto',  
    gap: '3rem',
    minHeight: 656,
    overflow: 'hidden'
})

export const Product = styled('div',{
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%);',
    boxShadow: '0px 0px 48px 0px rgba(0, 0, 0, 0.90)',
    cursor: 'pointer',
    position: 'relative',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',
    overflow: 'hidden',
    maxWidth: '696px !important' ,
    minWidth: '696px !important' ,
    color: '$gray100',
    div: {
        position: 'absolute',
        justifyContent: 'space-between',
        width: '100%',
        padding: '32px 40px 32px 32px',
        bottom: '0%',
        background: 'rgba(32, 32, 36, 0.90)',
        span:{
            color: '$green300'
        },
        transform: 'translate(0px, 100%)',
        opacity: '0' ,
        display: 'flex',
        transition: 'all 0.2s ease-in-out'
    },

    '&:hover':{
        div:{
            opacity: "1",
            transform: 'translate(0px, 0px)',

        }
    },

    img: {
        objectFit: 'cover'
    }

})