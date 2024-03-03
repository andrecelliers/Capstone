import React from "react";
import "./assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WelcomePage from "./views/WelcomePage";
import ChallengePage from "./views/ChallengePage";
import RewardPage from "./views/RewardPage";
import NoPage from "./views/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="challenge" element={<ChallengePage />} />
          <Route path="reward" element={<RewardPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
