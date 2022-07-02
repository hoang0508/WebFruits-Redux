import Blog from "Pages/blog/Blog.js";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { AuthProvider } from "../components/context/Auth-Context.js";
const Contact = lazy(() => import("Pages/Contact/Contact.js"));
const NotFoundPage = lazy(() => import("Pages/NotFoundPage.js"));
const SignInPage = lazy(() => import("Pages/SignInPage.js"));
const SignUpPage = lazy(() => import("Pages/SignUpPage.js"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Header = lazy(() => import("../components/Header/Header"));
const Topdown = lazy(() => import("../components/Topdown/Topdown"));
const Cartpage = lazy(() => import("../Pages/Cartpage/Cartpage.js"));
const Detailpage = lazy(() => import("../Pages/Detailpage/Detailpage.js"));
const HomePage = lazy(() => import("../Pages/HomePage.js"));

const RoutersConfig = () => {
  return (
    <Suspense fallback={<></>}>
      <AuthProvider>
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
            <Route path="/detail/:id" element={<Detailpage />}></Route>
            <Route
              path="/cart"
              element={
                <>
                  <AuthProvider>
                    <Cartpage />
                  </AuthProvider>
                </>
              }
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
          </Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </AuthProvider>
    </Suspense>
  );
};

export default RoutersConfig;
