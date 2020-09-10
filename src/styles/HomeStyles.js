import sizes from './MediaSizes';

export default {
  Home: {
    margin: 'auto',
    // height: '64vh',
    width: '80%',
    // border: '1px solid red',
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
    marginTop: '160px',
    paddingBottom: '80px',
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
  HomeRightTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& i': {
      color: 'red',
    },
    '& li': {
      listStyleType: 'none',
      '& i': {
        color: 'red',
      },
    },
  },
  HomeRightTitleText: {
    color: 'black',
    fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
    fontSize: '32px',
  },
  liText: {
    color: 'teal',
    fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
    fontWeight: 'normal',
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
  emailButtonDiv: {
    textAlign: 'center',
    marginTop: '48px',
    '& h6': {
      marginTop: '24px',
      fontWeight: '400',
    },
  },
  emailButton: {
    background: 'rgba(246,101,101,1)',
    color: 'rgba(254, 254, 254, 1) !important',
    padding: '16px 20%',
    width: '50%',
    transition: 'all 0.3s',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'rgba(254, 254, 254, 1) !important',
      background: 'rgba(246,101,101, 0.90)',
      boxShadow: '4px 4px 240px 1px rgba(150, 150, 150, 0.24)',
    },
  },
};
