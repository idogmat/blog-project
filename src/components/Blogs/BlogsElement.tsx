import React, { FC, useEffect, useState } from "react";
import { Flex } from "../../ui/Flex";
import { Image } from "../../ui/Image";
import { IBlog } from "../../store/slicers/blogsSlice";
import { Typography } from "../../ui/Typography";
import { BiDotsVertical } from "react-icons/bi";
import { Button } from "../../ui/Button";
import { Dropdown } from "../../ui/Dropdown";
import { useComponentVisible } from "../../utils/hooks/useComponentVisible";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { setItemToLC } from "../../utils/localStorage";
import { setPostsForBlog } from "../../store/thunks/blogsThunks";
import { useAppDispatch } from "../../utils/hooks";

export const BlogsElement: FC<IBlog> = ({
                                          name,
                                          description,
                                          websiteUrl,
                                          createdAt,
                                          id,
                                          posts
                                        }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  // const savePackData = () => {
  //   setItemToLC("backToState", {name,
  //     description,
  //     websiteUrl,
  //     createdAt,
  //     id,});
  // };
  // debugger
  const backToState = { name, description, websiteUrl, createdAt, id };
  return (
    <Flex fDirection={"row"} justify={"space-between"}>
      <Flex sx={{ gap: "1rem" }}>
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHQm5eWgXLBy-GRJBWH0p1XOgYkSV0XAb49zigIpX9e0izTM21bb8ADDvToi9Rq80FK0&usqp=CAU"
          }
        />
        <Flex fDirection={"column"} justify={"flex-start"} sx={{ gap: "1rem" }}>
          <Flex fDirection={"column"} justify={"center"}>
            <NavLink to={`${id}`} state={{ backToState }}>
              <Typography variant={"sub-title-md"}>{name}</Typography>
            </NavLink>

            <Typography variant={"sub-title-sm"}>
              Website:<a href={websiteUrl}>{websiteUrl}</a>
              {createdAt}
            </Typography>
          </Flex>
          <Typography variant={"sub-title-sm"}>{description}</Typography>
        </Flex>
      </Flex>
      <Button ref={ref} onClick={() => setIsComponentVisible(true)} semantic>
        <BiDotsVertical />
        <Dropdown
          posSettings={{ bottom: "50%", right: "0px" }}
          open={isComponentVisible}
        >
          <Typography>Edit</Typography>
          <Typography>Delete</Typography>
        </Dropdown>
      </Button>

    </Flex>
  );
};
