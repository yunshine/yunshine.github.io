import { Autorenew } from '@material-ui/icons';
import sizes from './MediaSizes';

export default {
  ProjectItem: {
    display: 'flex',
    margin: 'auto',
    marginTop: '24px',
    marginBottom: '56px',
    width: '85vw',
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
    [sizes.down('md')]: {
      width: '95%',
      margin: 'auto',
    },
    [sizes.down('sm')]: {
      width: '95%',
      margin: 'auto',
    },
  },
};
