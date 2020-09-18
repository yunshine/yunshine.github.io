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
      width: '80vw',
      margin: 'auto',
      padding: '0px 16px',
    },
    [sizes.down('sm')]: {
      display: 'block',
      width: '80vw',
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
    marginBottom: '400px',
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
      width: '40%',
      height: 'auto',
      boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
      border: 'white 1px solid',
      marginRight: '32px',
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
  },
};
