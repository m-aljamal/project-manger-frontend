import React from "react";
import { useAuth } from "src/context/auth-context";
import AdminApp from "./AdminApp";
import MangerApp from "./MangerApp";

const AuthApp = () => {
  const { user }: any = useAuth();
  return user.role === "ADMIN" ? <AdminApp /> : <MangerApp />;
};

export default AuthApp;
