import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../../routes/FrontendRoutes";
const BlankLayout = () => {
  return (
    <>
      <Suspense>
        <Routes fallback={<div>Loading...</div>}>
          {Array.isArray(routes) &&
            routes?.map((route, i) => {
              return (
                <Route
                  key={route?.label + i}
                  path={`${route?.path}`}
                  element={route?.component}
                />
              );
            })}
        </Routes>
      </Suspense>
    </>
  );
};

export default BlankLayout;
