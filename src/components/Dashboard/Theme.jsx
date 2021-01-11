import React from 'react'
import { Box, Switch, Typography } from "@material-ui/core"
import { useTheme, useThemeUpdate } from '../../contexts/ThemeContext'

const Theme = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

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
