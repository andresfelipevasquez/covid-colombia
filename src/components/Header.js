import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = () => {
    return(
        <div>
            <AppBar position="static" style={{ background: '#010915' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    COVID-19 en Colombia
                </Typography>                
                <Button 
                    color="inherit"
                    style={{ textTransform: 'none' }}
                    target="_blank"
                    href={"https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia/gt2j-8ykr"}
                 >Ir a fuente de datos
                 </Button>
                <Button 
                    color="inherit"
                    target="_blank"
                    href={"https://github.com/andresfelipevasquez/covid-colombia.git"}
                >
                    <GitHubIcon></GitHubIcon>
                </Button>
            </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;