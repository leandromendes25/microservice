import { AppBar, Button, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import logo from '../../static/img/logo.png';
//.. estpa voltando
//React.FC é o tipo do component. FC = FunctionComponent
//Typography permite lidar com texto
//Com material-ui podemos criar nosso proprio tema que é a escolha das cores.
//É bom colocarmos tipo para poder ter o auto complete. Sizes, xs, sm, md, lg e xl  
const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: '#000000'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    logo: {
        width: 100,
        [theme.breakpoints.up('sm')]: { //faz gerar um midia query ao utilizar breakpoint diz quando for maior que o sm(small)
            width: 170                   //coloca 170
        }

    }
}))


export const Navbar: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title}>
                    <img src={logo} alt="codeflix" className={classes.logo} />
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>


    );
};