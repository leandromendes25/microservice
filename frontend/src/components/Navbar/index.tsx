import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import logo from '../../static/img/logo.png';
//.. estpa voltando
//React.FC é o tipo do component. FC = FunctionComponent
//Typography permite lidar com texto
const useStyles = makeStyles(styles)


export const Navbar: React.FC = () => {
    return (
        <AppBar>
            <Toolbar>

                <Typography>
                    <img src={logo} alt="codeflix" />
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>


    );
};