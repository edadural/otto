import { Routes, Route } from "react-router-dom";
import routes from "@/routes";
import * as React from 'react';

export function Dashboard() {

  return (
    <div className="relative min-h-screen">
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "Dashboard" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
    </div>
  );
}

Dashboard.displayName = "/src/layout/Dashboard.jsx";

export default Dashboard;
