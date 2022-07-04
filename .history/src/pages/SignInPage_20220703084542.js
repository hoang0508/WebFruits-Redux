import React, { useEffect, useState } from "react";
import Authentication from "./Authentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Field } from "components/Field";
import { Label } from "components/label";
import { Input } from "components/Input";
import { IconClose, IconOpen } from "components/icon";
import { Button } from "components/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { auth } from "firebases/Firebase-config";
import { GoogleAuthProvider } from "firebase/auth";
import Social from "components/Social";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/users/userSlice";

// Validate form
const schema = yup.object({
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 character or greater"),
});

const SignInPage = () => {
  // Navigate
  const navigate = useNavigate();
  // React hook form
  const {
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // Redux
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ userInfo", userInfo);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  // useEffect
  useEffect(() => {
    document.title = "Sign In Page";
    if (userInfo?.email) navigate("/");
  }, [navigate, userInfo?.email]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
    //
    toast.success("SignIn Successfully!!!");
  };
  // Google
  const handleSignInGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
    if (userInfo?.email) navigate("/");
    toast.success("Sign In google successfully!!!");
  };
  // error, toastify
  useEffect(() => {
    const arrError = Object.values(errors);
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message);
    }
  }, [errors]);
  // TogglePassowd
  const [togglePassword, setTogglePassWord] = useState(false);
  const handleTogglePassowd = () => {
    setTogglePassWord(!togglePassword);
  };
  return (
    <Authentication>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type={!togglePassword ? "password" : "text"}
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconClose onClick={handleTogglePassowd}></IconClose>
            ) : (
              <IconOpen onClick={handleTogglePassowd}></IconOpen>
            )}
          </Input>
        </Field>
        <div className="text-center mx-auto mb-3">
          <Button
            type={"submit"}
            maxWidth="200px"
            height="56px"
            className="button button--primary"
            isLoading={isSubmitting}
          >
            Sign In
          </Button>
        </div>
        <div className="text-center mb-3 text-[18px] text-gray-300">Or</div>
        <div>
          <Social onClick={handleSignInGoogle} />
        </div>
        <div className="text-center mt-3">
          Bạn chưa có tài khoản?<NavLink to="/sign-up">Sign up</NavLink>
        </div>
      </form>
    </Authentication>
  );
};

export default SignInPage;
