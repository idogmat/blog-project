import React, { FC } from "react";
import { Flex } from "../../ui/Flex";
import { Image } from "../../ui/Image";
import { Typography } from "../../ui/Typography";
import { IPost } from "../../store/slicers/postsSlice";

export const PostElement: FC<IPost> = ({
  title,
  id,
  content,
  shortDescription,
  createdAt,
}) => {
  return (
    <Flex fDirection={"column"} justify={"space-between"} fWrap={"wrap"}>
      <Flex
        fDirection={"column"}
        justify={"space-between"}
        sx={{ gap: "1rem" }}
      >
        <Image
          bRadius={"0px"}
          height={"150px"}
          width={"200px"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHQm5eWgXLBy-GRJBWH0p1XOgYkSV0XAb49zigIpX9e0izTM21bb8ADDvToi9Rq80FK0&usqp=CAU"
          }
        />
        <Flex fDirection={"row"} justify={"flex-start"} sx={{ gap: "1rem" }}>
          <Image
            height={"40px"}
            width={"40px"}
            oFit={"cover"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHQm5eWgXLBy-GRJBWH0p1XOgYkSV0XAb49zigIpX9e0izTM21bb8ADDvToi9Rq80FK0&usqp=CAU"
            }
            sx={{ margin: "auto 0" }}
          />
          <Flex fDirection={"column"} justify={"center"}>
            <Typography variant={"sub-title-md"}>{title}</Typography>
            <Typography variant={"sub-title-sm"}>{createdAt}</Typography>
            <Typography variant={"sub-title-sm"}>{shortDescription}</Typography>
          </Flex>
        </Flex>
      </Flex>
      {/*<Button ref={ref} onClick={() => setIsComponentVisible(true)} semantic>*/}
      {/*  <BiDotsVertical />*/}
      {/*  <Dropdown*/}
      {/*    posSettings={{ bottom: "50%", right: "0px" }}*/}
      {/*    open={isComponentVisible}*/}
      {/*  >*/}
      {/*    <Typography>Edit</Typography>*/}
      {/*    <Typography>Delete</Typography>*/}
      {/*  </Dropdown>*/}
      {/*</Button>*/}
    </Flex>
  );
};
