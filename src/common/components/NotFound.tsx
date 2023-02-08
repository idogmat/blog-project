import React, { useEffect } from "react";
import { authAPI } from "../../api";

export const NotFound = () => {
  let fff: any;
  const res = async () =>
    await authAPI.login({ loginOrEmail: "kirill1", password: "1234567" });
  useEffect(() => {
    fff = res().then((e) => e);
    setTimeout(() => {
      console.log(fff);
    }, 4000);
  }, []);
  return <div>404</div>;
};
