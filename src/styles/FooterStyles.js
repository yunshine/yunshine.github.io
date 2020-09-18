import sizes from './MediaSizes';

export default {
  Footer: {
    background: 'rgba(53,161,205,0.85)',
    marginBottom: '0px',
    padding: '12px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '&  h3': {
      marginBottom: '0px',
      color: ' rgba(254, 254, 254, 1)',
      fontWeight: '200',
    },
    [sizes.down('md')]: {},
    [sizes.down('sm')]: {},
  },
  iconDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& i': {
      fontSize: '40px',
      color: ' rgba(254, 254, 254, 1)',
      fontWeight: '200',
    },
  },
};
