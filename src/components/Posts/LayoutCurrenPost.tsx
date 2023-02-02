import React, { FC, useEffect } from "react";
import { Flex } from "../../ui/Flex";
import { GoBack } from "../../common/components/GoBack";
import { Image } from "../../ui/Image";
import { NavLink, useLocation } from "react-router-dom";
import { Typography } from "../../ui/Typography";
import { IBlog } from "../../store/slicers/blogsSlice";

export const LayoutCurrenPost: FC<any> = (props) => {
  const { backToState } = useLocation().state;
  console.log(backToState);
  useEffect(() => {}, []);
  return (
    <Flex fDirection={"column"} justify={"center"} sx={{ width: "100%" }}>
      <Flex>
        <GoBack title={"Back to blogs"} />
      </Flex>
      <Image
        width={"250px"}
        height={"300px"}
        oFit={"inherit"}
        bRadius={"0"}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHQm5eWgXLBy-GRJBWH0p1XOgYkSV0XAb49zigIpX9e0izTM21bb8ADDvToi9Rq80FK0&usqp=CAU"
        }
        sx={{ margin: "auto" }}
      />
      <Flex sx={{ gap: "1rem" }}>
        <Flex fDirection={"column"} justify={"flex-start"} sx={{ gap: "1rem" }}>
          <Flex fDirection={"column"} justify={"center"}>
            <Typography variant={"sub-title-md"}>
              {backToState.title}
            </Typography>
            <Typography variant={"sub-title-sm"}>
              {backToState.content}
            </Typography>
            <Typography variant={"sub-title-sm"}>
              {backToState.shortDescription}
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
