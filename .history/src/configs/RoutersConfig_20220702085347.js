import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
const NotFoundPage = lazy(() => import("Pages/NotFoundPage.js"));
const SignInPage = lazy(() => import("Pages/SignInPage.js"));
const SignUpPage = lazy(() => import("Pages/SignUpPage.js"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Header = lazy(() => import("../components/Header/Header"));
const Topdown = lazy(() => import("../components/Topdown/Topdown"));
const HomePage = lazy(() => import("../Pages/HomePage.js"));

const RoutersConfig = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Footer />
              <Topdown />
            </>
          }
        >
          <Route path="/" element={<HomePage />}></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default RoutersConfig;
