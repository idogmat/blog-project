import React, { useEffect } from "react";
import { ContentForm } from "../../ui/ContentForm";
import { Flex } from "../../ui/Flex";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { setBlogs } from "../../store/thunks/blogsThunks";
import { blogsStateSelector } from "../../store/selectors";
import { BlogsElement } from "./BlogsElement";

export const Blogs = () => {
  const dispatch = useAppDispatch();
  const blogs = useAllSelector(blogsStateSelector);
  useEffect(() => {
    dispatch(setBlogs());
  }, []);
  return (
    <ContentForm fDirection={"column"} bgColor={"#faf7f8"}>
      <Flex fDirection={"column"} sx={{ borderBottom: "1px solid black" }}>
        <Typography variant={"title"}>Blogs</Typography>
      </Flex>
      <Flex fDirection={"row"} justify={"end"}>
        <Button>Add blog</Button>
      </Flex>
      <Flex fDirection={"column"}>
        {blogs.map((b) => {
          return <BlogsElement key={b.id} blog={b} />;
        })}
      </Flex>
    </ContentForm>
  );
};
