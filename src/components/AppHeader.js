import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './styles/AppHeader.scss';
import ThemeSwitcher from './ui-component/ThemeSwitcher';

function AppHeader() {
    const {theme} = useTheme();
  return (
    <Navbar variant={theme} expand='md' className='shadow-sm bg-body-tertiary' collapseOnSelect>
        <Container fluid='md'>
            <Navbar.Toggle/>
            <Navbar.Brand href='/' className='mx-auto'>React Projects</Navbar.Brand>
            <Navbar.Offcanvas aria-labelledby={'navigation-bar-label'} placement='start' >
                <Offcanvas.Header className='pb-0' closeButton><Navbar.Brand href='/'>React Projects</Navbar.Brand></Offcanvas.Header>
                <Offcanvas.Body className='d-flex flex-column flex-md-row pt-0'>
                    <hr className="d-md-none" />
                    <Nav as={'ul'} className="flex-grow-1 justify-content-md-center main-nav">
                        <Nav.Item as='li'><Nav.Link as={NavLink} eventKey="home" to={'/'} >Home</Nav.Link></Nav.Item>
                        <Nav.Item as='li'><Nav.Link as={NavLink} eventKey="project-list" to={'/projects'} >Projects</Nav.Link></Nav.Item>
                        <Nav.Item as='li'><Nav.Link as={NavLink} eventKey="contact-us" to={'/contact'} >Contact</Nav.Link></Nav.Item>
                    </Nav>
                    <hr className="d-md-none" />
                    <Nav as={'ul'} className="flex-row justify-content-center column-gap-3 column-gap-md-1">
                        <Nav.Item as='li'><Nav.Link as={'a'} href={'https://github.com/shreekmishra'} target='_blank'><i className="bi bi-github"/></Nav.Link></Nav.Item>
                        <Nav.Item as='li'><ThemeSwitcher/></Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  )
}

export default AppHeader