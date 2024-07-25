import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { NotFound } from "../NotFound/NotFound";
import { Services } from "../Services/Services";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Books } from "../Books/Books";
import { Profile } from "../Profile/Profile";
import { Admin } from "../Admin/Admin";

export const Body = () => {
  
  const passport = JSON.parse(localStorage.getItem("passport"));
  let role = null
  if (passport) {
    role = passport.tokenData.role;
  }
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/profile" element={<Profile />} />
        {role === "super_admin" && <Route path="/admin" element={<Admin />} />}
      </Routes>
    </>
  );
};
