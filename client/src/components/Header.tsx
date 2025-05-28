import { AppBar, Toolbar, Typography } from '@mui/material';

import { APP_NAME } from '../constants/common';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6'>{APP_NAME}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
