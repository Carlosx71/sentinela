import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    colorText: {
      color: '#cdaa5d',
    },
    link: {
      color: '#cdaa5d',
      textDecoration: 'none',
    },
  };
});

export default useStyles;
