import sizes from './MediaSizes';

export default {
  Home: {
    marginTop: '16px',
    margin: 'auto',
    // height: '64vh',
    width: '80%',
    // border: '1px solid red',
    display: 'flex',
    marginBottom: '0px',
    '& h2': {
      fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
      fontSize: '72px',
      fontWeight: '600',
      color: 'rgba(20, 15, 73, 1)',
    },
    [sizes.down('md')]: {
      margin: 'auto',
      width: '95%',
      marginTop: '24px',
      display: 'block',
      '& h2': {
        fontSize: '48px',
      },
      '& h5': {
        fontSize: '22px',
      },
    },
    [sizes.down('sm')]: {
      width: '95%',
      margin: 'auto',
      marginTop: '24px',
      display: 'block',
      '& h2': {
        fontSize: '40px',
      },
      '& h5': {
        fontSize: '20px',
      },
    },
  },
  HomeLeft: {
    width: '60%',
    // border: '1px solid black',
    marginTop: '120px',
    paddingBottom: '48px',
    '& h2': {
      lineHeight: '95%',
    },
    '& h5': {
      fontWeight: '300',
      marginTop: '32px',
    },
    [sizes.down('md')]: {
      margin: 'auto',
      width: '90%',
      paddingBottom: '28px',
    },
    [sizes.down('sm')]: {
      margin: 'auto',
      width: '95%',
      paddingBottom: '0px',
    },
  },
  HomeRight: {
    marginTop: '120px',
    padding: '16px 0px',
    width: '40%',
    borderRadius: '2px',
    [sizes.down('md')]: {
      width: '90%',
      margin: 'auto',
      border: '1px solid rgba(20,15,73,.3)',
    },
    [sizes.down('sm')]: {
      width: '95%',
      margin: 'auto',
      marginTop: '32px',
      border: '1px solid rgba(20,15,73,.3)',
    },
  },
  HomeRightTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0px',
    '& i': {
      color: 'rgba(246,101,101,1)',
      fontSize: '40px',
    },
    [sizes.down('md')]: {
      // '& i': {
      //   color: 'transparent',
      // },
    },
    [sizes.down('sm')]: {
      // '& i': {
      //   display: 'none',
      // },
    },
  },
  HomeRightTitleList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& i': {
      color: 'brown',
      fontSize: '30px',
    },
    '& li': {
      listStyleType: 'none',
    },
  },
  HomeRightTitleText: {
    color: 'rgba(20,15,73,1)',
    fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
    fontSize: '32px',
    fontWeight: '500',
    [sizes.down('md')]: {
      fontSize: '28px',
    },
    [sizes.down('sm')]: {
      fontSize: '20px',
    },
  },
  liText: {
    // color: 'teal',
    fontSize: '16px',
    fontFamily: 'Raleway, Arial, Helvetica, sans-serif !important',
    fontWeight: 'normal',
  },
  skillsListRow: {
    padding: '8px 0px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  skillsListBox: {
    border: '1px solid rgba(20,15,73,.5)',
    borderRadius: '2px',
    width: '44%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '8px 4px 4px 8px',
    transition: 'all .1s ease-in-out',
    '& i': {
      marginRight: '8px',
      color: 'rgba(246,101,101,1)',
      color: ' rgba(20,15,73,.5)',
      color: 'rgba(53,161,205, 0.75)',
      // color: 'rgba(88,206,255,1)',

      fontSize: '22px',
    },
    '& span': {
      color: 'rgba(20,15,73,1)',
      fontSize: '16px',
      fontWeight: '400',
    },
    '&:hover': {
      transform: 'scale(1.03)',
      background: 'rgba(254, 254, 254, 1)',
    },
    [sizes.down('md')]: {
      '& span': {
        fontSize: '16px',
      },
    },
    [sizes.down('sm')]: {
      '& span': {
        fontSize: '14px',
      },
    },
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
    [sizes.down('md')]: {
      fontSize: '72px',
    },
    [sizes.down('sm')]: {
      fontSize: '72px',
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
    [sizes.down('md')]: {
      fontSize: '34px',
    },
    [sizes.down('sm')]: {
      fontSize: '30px',
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
    display: 'inline-block',
    color: 'rgba(254, 254, 254, 1) !important',
    padding: '16px 15%',
    width: '50%',
    transition: 'all 0.3s',
    borderRadius: '4px',
    '&:hover': {
      transform: 'scale(1.03)',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'rgba(254, 254, 254, 1) !important',
      background: 'rgba(246,101,101, 0.90)',
      boxShadow: '4px 4px 240px 1px rgba(150, 150, 150, 0.24)',
    },
  },
};
