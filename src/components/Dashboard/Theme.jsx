import React from 'react'
import { Box, Switch, Typography } from "@material-ui/core"
import useTheme from '../../hooks/useTheme'

const Theme = () => {
  const [darkTheme, toggleTheme] = useTheme()

  return (
    <Box style={{ margin: '20px 0' }} display="flex" justifyContent="center">
      <Typography variant="h6">Dark Theme</Typography>
      <Switch
        checked={darkTheme}
        onChange={toggleTheme}
        name="themeSwitch"
        color="primary"
      />
    </Box>
  )
}

export default Theme
