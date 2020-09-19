import sizes from './MediaSizes';

export default {
  About: {
    margin: 'auto',
    marginTop: '0px',
    width: '56vw',
    // border: '1px solid blue',
    // textAlign: 'center',
    [sizes.down('md')]: {
      display: 'block',
      width: '85vw',
      margin: 'auto',
      padding: '0px 16px',
    },
    [sizes.down('sm')]: {
      display: 'block',
      width: '88vw',
      margin: 'auto',
    },
  },
  AboutTitle: {
    '& h1': {
      textAlign: 'center',
      color: 'rgba(20, 15, 73, 0.32)',
      fontSize: '32px',
      marginBottom: '0px',
      lineHeight: '85%',
      fontWeight: '350',
    },
    '& h2': {
      textAlign: 'center',
      color: 'rgba(20, 15, 73, 1)',
      fontSize: '56px',
      fontWeight: '550',
    },
  },
  AboutFlexContainer: {
    marginTop: '32px',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: '85px',
  },
  AboutLeft: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // border: 'black 1px solid',
    '& img': {
      textAlign: 'right',
      borderRadius: '50%',
      width: '48%',
      height: 'auto',
      boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
      border: 'white 1px solid',
      marginRight: '32px',
    },
    [sizes.down('md')]: {
      width: '45%',

      '& img': {
        width: '56%',
        height: 'auto',
      },
    },
    [sizes.down('sm')]: {
      width: '45%',

      '& img': {
        width: '88%',
        height: 'auto',
      },
    },
  },
  AboutRight: {
    width: '50%',
    // border: 'black 1px solid',
    '& h2': {
      color: 'rgba(53,161,205,1)',
    },
    '& p': {
      fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
      fontSize: '16px',
      fontWeight: '450',
      color: 'rgba(20, 15, 73, 0.85)',
    },
    [sizes.down('md')]: {
      width: '55%',
      '& h2': {
        color: 'rgba(53,161,205,1)',
      },
      '& p': {
        fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
        fontSize: '15px',
        fontWeight: '400',
        color: 'rgba(20, 15, 73, 0.85)',
      },
    },
    [sizes.down('sm')]: {
      width: '55%',
      '& h2': {
        fontSize: '22px',
        color: 'rgba(53,161,205,1)',
      },
      '& p': {
        fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
        fontSize: '15px',
        fontWeight: '400',
        color: 'rgba(20, 15, 73, 0.9)',
      },
    },
  },
};
