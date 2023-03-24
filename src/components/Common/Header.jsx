import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';


const Header = () => (
  

    <Box sx={{ flexGrow: 1 }}>
      <AppBar align='center' position="static">
        <Toolbar  >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            L Y R °|° C S   - : - Finder APP
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  

)
export default Header;

