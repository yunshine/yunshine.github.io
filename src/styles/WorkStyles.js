import sizes from './MediaSizes';

export default {
  Work: {
    margin: 'auto',
    width: '85%',
    marginTop: '0px',
    // border: '1px solid turquoise',
    // '& h3': {
    //   color: 'rgba(20, 15, 73, 1)',
    // },
    [sizes.down('md')]: {
      width: '90%',
      margin: 'auto',
      marginTop: '44px',
      // border: '1px solid rgba(20,15,73,.3)',
    },
    [sizes.down('sm')]: {
      width: '95%',
      margin: 'auto',
      marginTop: '44px',
      // border: '1px solid rgba(20,15,73,.3)',
    },
  },
  WorkTitle: {
    textAlign: 'center',
    '& h1': {
      color: 'rgba(20, 15, 73, 0.32)',
      fontSize: '24px',
      marginBottom: '0px',
      lineHeight: '85%',
      fontWeight: '350',
    },
    '& h2': {
      color: 'rgba(20, 15, 73, 1)',
      fontSize: '48px',
      fontWeight: '550',
    },
  },
};
