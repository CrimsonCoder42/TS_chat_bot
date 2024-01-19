import React from 'react'
import Logo from './shared/Logo'

import { AppBar, Toolbar } from '@mui/material'

const Header = () => {
  return <AppBar sx={{
    bgcolor: "transparent", 
    position: "static", 
    boxShadow: "none"
    }}>
    <Toolbar sx={{ display:"flex" }}>
      <Logo />
    </Toolbar>
    </AppBar>
}

export default Header