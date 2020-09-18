import sizes from './MediaSizes';

export default {
  About: {
    margin: 'auto',
    marginTop: '0px',
    width: '80%',
    border: '1px solid blue',
    textAlign: 'center',

    [sizes.down('md')]: {
      width: '95vw',
      margin: 'auto',
      marginTop: '44px',
    },
    [sizes.down('sm')]: {
      width: '95vw',
      margin: 'auto',
      marginTop: '44px',
    },
    [sizes.down('md')]: {},
    [sizes.down('sm')]: {},
  },
  AboutTitle: {
    '& h1': {
      color: 'rgba(20, 15, 73, 0.32)',
      fontSize: '32px',
      marginBottom: '0px',
      lineHeight: '85%',
      fontWeight: '350',
    },
    '& h2': {
      color: 'rgba(20, 15, 73, 1)',
      fontSize: '56px',
      fontWeight: '550',
    },
  },
  AboutFlexContainer: {
    display: 'flex',
  },
  AboutLeft: {
    '& img': {
      borderRadius: '50%',
      width: '20%',
      height: 'auto',
    },
  },
  AboutRight: {},
};
