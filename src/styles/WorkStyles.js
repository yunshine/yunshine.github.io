import sizes from './MediaSizes';

export default {
  Work: {
    margin: 'auto',
    width: '85vw',
    marginTop: '32px',
    [sizes.down('md')]: {
      width: '100vw',
      margin: 'auto',
      marginTop: '44px',
    },
    [sizes.down('sm')]: {
      width: '100vw',
      margin: 'auto',
      marginTop: '44px',
    },
  },
  WorkTitle: {
    textAlign: 'center',
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
    [sizes.down('md')]: {
      marginTop: '72px',
    },
    [sizes.down('sm')]: {
      marginTop: '64px',
    },
  },
};
