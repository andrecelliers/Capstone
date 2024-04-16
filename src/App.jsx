import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WelcomePage from "./views/WelcomePage";
import ChallengePage from "./views/ChallengePage";
import RewardPage from "./views/RewardPage";
import NoPage from "./views/NoPage";

function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <WelcomePage /> },
        { path: "/welcome", element: <WelcomePage /> },
        { path: "/welcome/:key", element: <WelcomePage /> },
        { path: "/challenge", element: <ChallengePage /> },
        { path: "/challenge/:key", element: <ChallengePage /> },
        { path: "/reward", element: <RewardPage /> },
        { path: "/reward/:key", element: <RewardPage /> },
        { path: "*", element: <NoPage /> },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children.map((child, index) => (
              <Route
                key={index}
                index={child.index}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
