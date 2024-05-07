import { AppBar, MenuItem, Toolbar, styled } from '@mui/material'
import { useState } from 'react'
const NavBar = () => {

    const StyledToolBar = styled(Toolbar)(() => ({

        justifyContent: 'space-evenly',
        display: 'flex'



    }))
    return (
        <>
            <AppBar position='absolute'>
                <StyledToolBar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolBar>


            </AppBar>
        </>
    )
}

export default NavBar
