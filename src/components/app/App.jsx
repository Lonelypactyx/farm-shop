import React from "react";
import PageWrapper from "/src/components/pages/page-wrapper";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "/src/components/ui/scroll-top";
import { GlobalStyle } from "./style";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<MainPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route
              path="*"
              element={<h1>Ошибка 404. Страница не существует.</h1>}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
