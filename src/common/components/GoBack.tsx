import React, { FC } from "react";
import styled from "styled-components";
import BackIcon from "../assets/back_arrow.svg";
import { useNavigate } from "react-router-dom";
import { GoBackNav } from "../../ui/GoBackNav";
import { BsArrowLeft } from "react-icons/bs";

type GoBackProps = {
  title: string;
};

export const GoBack: FC<GoBackProps> = ({ title }) => {
  const navigate = useNavigate();

  const back = () => navigate(-1);
  return (
    <GoBackNav semantic onClick={back}>
      <BsArrowLeft />
      {title}
    </GoBackNav>
  );
};
