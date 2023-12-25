import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import { AppRoot } from './styled-components/AppLayout.styled';
import { Container } from 'react-bootstrap';

function AppLayout() {
    
  return (
    <AppRoot>
        <header className='sticky-top'><AppHeader /></header>
        <main className='py-2'><Container fluid='md'><Outlet /></Container></main>
        <footer><AppFooter /></footer>
    </AppRoot>
  )
}

export default AppLayout