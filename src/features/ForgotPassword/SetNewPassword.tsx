import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateNewPassword } from "./CreateNewPassword";
import { VerificationLinkExpired } from "./VerificationLinkExpired";
import { useAppDispatch } from "../../utils/hooks";

export const SetNewPassword = () => {
  const [freshCode, setCode] = useState(true);
  const dispatch = useAppDispatch();
  const data = useParams();
  const code = data["*"]?.replace(/recoveryCode=/, "");
  useEffect(() => {
    !!code && console.log(code);
  }, []);
  return freshCode ? (
    <CreateNewPassword code={code} setCode={setCode} />
  ) : (
    <VerificationLinkExpired />
  );
};
