import React from "react";
import { PageNotFoundLayout } from "../components/styled-components/PageNotFound.styled";

function PageNotFound() {
  return (
    <div className="d-flex justify-content-center h-100 align-items-center">
      <PageNotFoundLayout>
        <h3>OOPS!! PAGE NOT FOUND</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <h4>The page you requested not found</h4>
      </PageNotFoundLayout>
    </div>
  );
}

export default PageNotFound;
