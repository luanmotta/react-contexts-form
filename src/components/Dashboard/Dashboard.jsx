import React from 'react';
import Theme from './Theme'
import Content from './Content'
import { ThemeProvider } from '../../contexts/ThemeContext'

const Dashboard = () => {
  return (
    <>
      <ThemeProvider>
        <Theme />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default Dashboard;
