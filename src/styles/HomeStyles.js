import sizes from './MediaSizes';

export default {
  Home: {
    margin: 'auto',
    height: '95vh',
    width: '80%',
    border: '1px solid red',
    display: 'flex',
    marginTop: '32px',
    marginBottom: '32px',
    '& h2': {
      fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
      fontSize: '72px',
      fontWeight: '600',
      color: 'rgba(20, 15, 73, 1)',
    },
  },
  HomeLeft: {
    width: '50%',
    border: '1px solid black',
    '& h2': {
      lineHeight: '85%',
    },
  },
  HomeRight: {
    width: '50%',
    border: '1px solid black',
  },
  Blue: {
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
};
