import React from 'react'
import { Box } from '@mui/material'

const Login = () => {
  return <Box width={'100%'} height={"100%"} display="flex" flex={1}>  
    <Box 
      padding={8} 
      mt={8} 
      display={{md:"flex", sm:"none"}}
      >
        <img src="airobot.png" alt="Robot" style={{width: "400px"}} />
      </Box>
    <Box display={'flex'} flex={{xs: 1, md: 0.5}}>

    </Box>
  
  </Box>
}

export default Login