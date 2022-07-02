import { Button } from "components/button";
import { Field } from "components/Field";
import { IconClose, IconOpen } from "components/icon";
import { Input } from "components/Input";
import { Label } from "components/label";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "Firebase-app/Firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import Authentication from "./Authentication";

// Validation Yup
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullName"),
  email: yup
    .string()
    .required("Please enter your address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 character or greater"),
});

const SignUpPage = () => {
  // React hook form
  const {
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // navigate
  const navigate = useNavigate();
  const handleSignUp = async (values) => {
    if (!isValid) return;
    console.log(values);
    // Đăng ký tài khoản
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    // DisplayName, hiển thị name
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    // addDoc , collection
    const userRef = collection(db, "user");
    addDoc(userRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register SignUp Form!!!");
    navigate("/");
  };
  useEffect(() => {
    document.title = "Sign Up Page";
  }, []);
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
  // console.log(errors);
  return (
    <Authentication>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="name">Fullname</Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
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
        <div className="mx-auto text-center">
          <Button
            type={"submit"}
            maxWidth="200px"
            height="56px"
            className="button button--primary"
            isLoading={isSubmitting}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Authentication>
  );
};

export default SignUpPage;
