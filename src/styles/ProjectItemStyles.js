import { Autorenew } from '@material-ui/icons';
import sizes from './MediaSizes';

export default {
  ProjectItem: {
    display: 'flex',
    margin: 'auto',
    marginTop: '24px',
    marginBottom: '56px',
    width: '85vw',
    transition: 'all .1s ease-in-out',
    // '&:hover': {
    //   transform: 'scale(1.01)',
    // },
    [sizes.down('md')]: {
      display: 'block',
      textAlign: 'auto',
      width: '90vw',
      marginTop: '16px',
      marginBottom: '56px',
    },
    [sizes.down('sm')]: {
      display: 'block',
      width: '90vw',
      margin: 'auto',
      marginTop: '16px',
      marginBottom: '56px',
    },
  },
  ProjectItemLeft: {
    width: '55%',
    [sizes.down('md')]: {
      width: '95%',
      margin: 'auto',
    },
    [sizes.down('sm')]: {
      width: '95%',
      margin: 'auto',
    },
  },
  ProjectItemRight: {
    width: '45%',
    border: '1px solid rgba(20,15,73,.3)',
    borderRadius: '0px 4px 4px 0px',
    fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
    color: 'rgba(20, 15, 73, 1)',
    padding: '24px 16px 0px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h2': {
      textAlign: 'center',
      margin: 'auto',
      fontSize: '32px',
      fontWeight: '500',
      marginBottom: '0px',
    },
    '& p': {
      margin: 'auto',
      fontSize: '16px',
      textAlign: 'center',
    },
    '& h5': {
      marginTop: '56px',
      fontSize: '17px',
      textAlign: 'center',
      fontWeight: '450',
      color: 'rgba(20, 15, 73, 0.8)',
    },
    '& pre': {
      fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
      fontSize: '15px',
      textAlign: 'center',
      fontWeight: '450',
      color: 'rgba(20, 15, 73, 0.7)',
      // marginTop: '8px',
      marginBottom: '4px',
    },
    [sizes.down('md')]: {
      width: '95%',
      margin: 'auto',
      marginBottom: '0px',
      borderRadius: '0px 0px 4px 4px',
      padding: '24px 16px 24px 16px',
      '& h5': {
        marginTop: '20px',
      },
    },
    [sizes.down('sm')]: {
      width: '95%',
      margin: 'auto',
      marginBottom: '0px',
      borderRadius: '0px 0px 4px 4px',
      padding: '24px 16px 24px 16px',

      '& h5': {
        marginTop: '12px',
      },
      '& pre': {
        // display: 'block',
        // overflowWrap: 'break-word',
        // wordWrap: 'break-word',
      },
    },
  },
  buttonsDiv: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0px',
    '& a': {
      margin: '16px',
      color: 'rgba(246,101,101,1) !important',
      fontSize: '16px',
      fontWeight: '600',
      border: '2px solid rgba(246,101,101,1)',
      borderRadius: '4px',
      // display: 'inline-block',
      background: 'transparent',
      padding: '4px 28px',
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        cursor: 'pointer',
        textDecoration: 'none',
        boxShadow: '4px 4px 240px 1px rgba(150, 150, 150, 0.24)',
        color: 'rgba(246,101,101, 0.90)',
        border: '2px solid rgba(246,101,101, 0.90)',
        background: 'white',
      },
    },
  },
};
