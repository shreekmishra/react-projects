import React from "react";
import { Button, ButtonGroup, NavDropdown } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../constants/Constants";


function ThemeSwitcher() {
  const {theme, toggleTheme} = useTheme();
  const switchTheme = (theme, event) => {
    toggleTheme(theme);
  }

  const getThemeSwitcherTitle = (selectedTheme) => {
    switch (selectedTheme) {
        case Theme.DARK:
            return <i className="bi bi-moon-stars-fill"/>;
        case Theme.LIGHT:
            return <i className="bi bi-sun-fill"/>;
        case Theme.AUTO:
        default:
            return <i className="bi bi-circle-half"/>;
    }
  }
  
  return (
    <>
      <NavDropdown title={getThemeSwitcherTitle(theme)} className="d-none d-md-block">
        <NavDropdown.Item as={Button} active={theme === Theme.LIGHT} onClick={switchTheme.bind(null, Theme.LIGHT)}><i className="bi bi-sun-fill"/>  Light</NavDropdown.Item>
        <NavDropdown.Item as={Button} active={theme === Theme.DARK} onClick={switchTheme.bind(null, Theme.DARK)}><i className="bi bi-moon-stars-fill"/> Dark </NavDropdown.Item>
        <NavDropdown.Item as={Button} active={theme === Theme.AUTO} onClick={switchTheme.bind(null, Theme.AUTO)}><i className="bi bi-circle-half"/> Auto</NavDropdown.Item>
      </NavDropdown>
      <ButtonGroup size="sm" className="mt-1 d-md-none">
        <Button variant="outline-secondary" active={theme === Theme.LIGHT} onClick={switchTheme.bind(null, Theme.LIGHT)}><i className="bi bi-sun-fill"/></Button>
        <Button variant="outline-secondary" active={theme === Theme.DARK} onClick={switchTheme.bind(null, Theme.DARK)}><i className="bi bi-moon-stars-fill"/></Button>
        <Button variant="outline-secondary" active={theme === Theme.AUTO} onClick={switchTheme.bind(null, Theme.AUTO)}><i className="bi bi-circle-half"/></Button>
      </ButtonGroup>
    </>
  );
}

export default ThemeSwitcher;
