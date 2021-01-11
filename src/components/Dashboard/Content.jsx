import React from 'react'
import { Box } from "@material-ui/core";
import useTheme from '../../hooks/useTheme'

const Content = () => {
  const [ darkTheme ] = useTheme()

  const containerStyle = {
    backgroundColor: darkTheme ? 'black': 'white',
    height: '160px'
  }

  const textStyle = {
    color: darkTheme ? 'white': 'black',
  }

  return (
    <Box style={{ margin: '20px 0 40px 0' }}>
      <Box display="flex" justifyContent="center" alignItems="center" style={containerStyle}>
        <div style={textStyle}>Some random text.</div>
      </Box>
    </Box>
  )
}

export default Content
