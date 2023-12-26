import React from "react";
import { Button, ButtonGroup, NavDropdown } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../constants/Constants";


function ThemeSwitcher() {
  const {selectedTheme, toggleTheme} = useTheme();
  const switchTheme = (theme, event) => {
    toggleTheme(theme);
  }

  const getThemeIcon = (theme) => {
    switch (theme) {
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
      <NavDropdown title={getThemeIcon(selectedTheme)} className="d-none d-md-block">
        {Object.keys(Theme).map(key =>
          <NavDropdown.Item key={key} as={Button} active={selectedTheme === Theme[key]} onClick={switchTheme.bind(null, Theme[key])}>{getThemeIcon(Theme[key])} {Theme[key].capitalize()}</NavDropdown.Item>  
          )}
      </NavDropdown>
      <ButtonGroup size="sm" className="mt-1 d-md-none">
      {Object.keys(Theme).map(key =>
          <Button key={key} variant="outline-secondary" active={selectedTheme === Theme[key]} onClick={switchTheme.bind(null, Theme[key])}>{getThemeIcon(Theme[key])}</Button>
          )}
      </ButtonGroup>
    </>
  );
}

export default ThemeSwitcher;
