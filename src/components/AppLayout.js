import React from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import { AppRoot } from "./styled-components/AppLayout.styled";

function AppLayout() {
  return (
    <AppRoot>
      <header className="sticky-top">
        <AppHeader />
      </header>
      <main className="d-flex align-items-stretch">
        <div className="w-100">
          <Outlet />
        </div>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </AppRoot>
  );
}

export default AppLayout;
