import React from 'react'
import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink'

import { AppBar, Toolbar } from '@mui/material'

const Header = () => {
  const auth = useAuth();
  return <AppBar sx={{
    bgcolor: "transparent", 
    position: "static", 
    boxShadow: "none"
    }}>
    <Toolbar sx={{ display:"flex" }}>
      <Logo />
      <div>
      {auth?.isLoggedIn ? ( 
      <>
      <NavigationLink 
        bg="#00fffc" 
        to="/chat" 
        text="Go To Chat" 
        textColor="black"
      />
      <NavigationLink 
        bg='#51538F' 
        textColor='white' 
        to='/' 
        text='Home' 
        onClick={auth.logout}
        /> 
      </> ): <>
            <NavigationLink
              bg="#00fffc"
              to="/login"
              text="Login"
              textColor="black"
            />
            <NavigationLink
              bg='#51538F'
              textColor='white'
              to='/signup'
              text='Sign Up'
              onClick={auth.logout}
            />
      </>}
      </div>
    </Toolbar>
    </AppBar>
}

export default Header