import * as React from 'react';
import { Button, IconButton, makeStyles, Menu as MuiMenu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'//importando menu como MenuIcon
export const  Menu = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl); //vai ficar null até o momento em q clicar

    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);
    return (
        <React.Fragment>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
            >
                <MenuIcon />
            </IconButton>

            <MuiMenu
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

            </MuiMenu>
        </React.Fragment>
    );
};