import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const Header = () => {
    return(
        <div>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Toolbar>
                <Typography variant="h6">
                    COVID-19 en Colombia
                </Typography>                
            </Toolbar>
            </AppBar>
        </div>
);
}
export default Header;