import { Button } from "components/button";

import { auth } from "firebases/Firebase-config";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import {
  FaLocationArrow,
  FaMailBulk,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { toast } from "react-toastify";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/users/userSlice";

const HeaderContact = () => {
  // useEffect(() => {

  const dispatch = useDispatch();
  //

  // sign out
  const handleSignOut = (e) => {
    dispatch(getUser(auth));
  };

  // user
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const userInfo = useSelector((state) => state.users.userInfo);
  return (
    <header className="header">
      <div className="header-contact">
        <div className="container">
          <div className="header-info">
            <div className="header-info--add">
              <span className="header-info--icon">
                <FaLocationArrow />
              </span>
              <span>175 5th Ave Premium Area, New York</span>
            </div>
            <div className="header-info--gmail">
              <span className="header-info--icon">
                <FaMailBulk />
              </span>
              <span>hh@gmail.com</span>
            </div>
          </div>
          <div className="header-auth">
            {!userInfo?.displayName ? (
              <Button type="submit" className={"button-sign"} to="/sign-in">
                Sign In
              </Button>
            ) : (
              <div>
                <span>Welcome back!! </span>
                <strong>{userInfo?.displayName}</strong>
              </div>
            )}
            <div>
              <button
                className="px-[30px] py-[15px] bg-orange-500 text-white rounded"
                onClick={() => handleSignOut()}
              >
                Sign out
              </button>
            </div>
            <div className="header-social">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <FaPinterestP />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContact;
