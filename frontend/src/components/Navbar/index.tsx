import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import logo from '../../static/img/logo.png';
import MenuIcon from '@material-ui/icons/Menu'//importando menu como MenuIcon
import { Event } from '@material-ui/icons';
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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl); //vai ficar null até o momento em q clicar

    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpen}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    id="menu-appbar"
                    open={open}/*controla se o menu está aberto ou não*/
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: "center" }}
                    transformOrigin={{ vertical: 'top', horizontal: "center" }}
                    getContentAnchorEl={null}
                >
                    <MenuItem onClick={handleClose} /*Itens do menu. Ao clicar */>
                        Categorias
                    </MenuItem>

                </Menu>
                <Typography className={classes.title}>
                    <img src={logo} alt="codeflix" className={classes.logo} />
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar >
        </AppBar >


    );
};