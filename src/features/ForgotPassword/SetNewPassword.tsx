import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateNewPassword } from "./CreateNewPassword";
import { VerificationLinkExpired } from "./VerificationLinkExpired";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { errorStateSelector } from "../../store/selectors";

export const SetNewPassword = (): JSX.Element => {
  const [freshCode, setCode] = useState(true);
  const error = useAllSelector(errorStateSelector);
  const dispatch = useAppDispatch();
  const data = useParams();
  console.log(error);
  const [meta, code] = data["*"]?.split(/Code=/) || ["", ""];
  useEffect(() => {
    error !== "recoveryCode" ? setCode(true) : setCode(false);
  }, [error]);
  return freshCode ? (
    <CreateNewPassword code={code} setCode={setCode} />
  ) : (
    <VerificationLinkExpired />
  );
};
