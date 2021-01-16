import sizes from './MediaSizes';

export default {
    Footer: {
        background: 'rgba(53,161,205,0.85)',
        marginBottom: '0px',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&  h5': {
            margin: '0px',
            padding: '0px',
            color: ' rgba(254, 254, 254, 1)',
            fontWeight: '200',
            fontSize: '18px',
        },
        [sizes.down('md')]: {
            fontSize: '16px',
            padding: '16px 16px',
        },
        [sizes.down('sm')]: {
            fontSize: '12px',
        },
    },
    iconDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& i': {
            fontSize: '24px',
            color: ' rgba(254, 254, 254, 0.85)',
            fontWeight: '200',
            margin: '0px 12px',
            transition: 'all .1s ease-in-out',
            '&:hover': {
                transform: 'scale(1.3)',
            },
        },
    },
};
