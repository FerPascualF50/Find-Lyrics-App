import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar align='center' position="static">
                <Toolbar  >
                    <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                        &copy; {new Date().getFullYear()}
                        - Powered By Fer Pascual  -  Phone +54 351 3414403  -  email pascualefernando@gmail.com
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;