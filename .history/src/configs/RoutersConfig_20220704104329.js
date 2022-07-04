import DashboardLayout from "modules/Dashboard/DashboardLayout";
import ProductAddNews from "modules/Product/ProductAddNews";
import DashboardPage from "pages/DashboardPage";
import Detailpage from "pages/Detailpage/Detailpage";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
const NotFoundPage = lazy(() => import("pages/NotFoundPage.js"));
const SignInPage = lazy(() => import("pages/SignInPage.js"));
const SignUpPage = lazy(() => import("pages/SignUpPage.js"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Header = lazy(() => import("../components/Header/Header"));
const Topdown = lazy(() => import("../components/Topdown/Topdown"));
const HomePage = lazy(() => import("pages/HomePage"));

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
          <Route path="/details:id" element={<Detailpage />}></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/manage/product" element={<ProductAddNews />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default RoutersConfig;
