import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    colorText: {
      color: '#2e5da1',
    },
    link: {
      color: '#2e5da1',
      textDecoration: 'none',
    },
  };
});

export default useStyles;
