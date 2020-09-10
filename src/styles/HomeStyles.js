import sizes from './MediaSizes';

export default {
  Home: {
    margin: 'auto',
    height: '64vh',
    width: '80%',
    border: '1px solid red',
    display: 'flex',
    marginTop: '16px',
    marginBottom: '32px',
    '& h2': {
      fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
      fontSize: '72px',
      fontWeight: '600',
      color: 'rgba(20, 15, 73, 1)',
    },
  },
  HomeLeft: {
    width: '60%',
    // border: '1px solid black',
    marginTop: '16vh',
    marginBottom: '32px',
    '& h2': {
      lineHeight: '95%',
    },
    '& h5': {
      fontWeight: '300',
      marginTop: '32px',
    },
  },
  HomeRight: {
    width: '40%',
    border: '1px solid black',
  },
  BlueH2: {
    color: 'rgba(53,161,205,1)',
    fontWeight: '725',
    fontSize: '85px',
    // [sizes.down('lg')]: {
    //   fontSize: '24px',
    // },
    // [sizes.down('md')]: {
    //   fontSize: '14px',
    // },
    [sizes.down('sm')]: {
      fontSize: '34px',
    },
    [sizes.down('xs')]: {
      fontSize: '8px',
    },
  },
  BlueH5: {
    color: 'rgba(53,161,205,1)',
    fontWeight: '725',
    fontSize: '24px',
    // [sizes.down('lg')]: {
    //   fontSize: '24px',
    // },
    // [sizes.down('md')]: {
    //   fontSize: '14px',
    // },
    [sizes.down('sm')]: {
      fontSize: '34px',
    },
    [sizes.down('xs')]: {
      fontSize: '8px',
    },
  },
};
