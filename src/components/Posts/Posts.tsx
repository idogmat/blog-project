import React, { useEffect } from "react";
import { Flex } from "../../ui/Flex";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { ContentForm } from "../../ui/ContentForm";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { postsStateSelector } from "../../store/selectors";
import { PostElement } from "./PostElement";
import { setPosts } from "../../store/thunks/postsThunks";

export const Posts = () => {
  const dispatch = useAppDispatch();

  const posts = useAllSelector(postsStateSelector);
  useEffect(() => {
    dispatch(setPosts({}));
  }, []);
  return (
    <ContentForm fDirection={"column"} bgColor={"#faf7f8"}>
      <Flex
        fDirection={"column"}
        sx={{ borderBottom: "1px solid black", margin: "1rem 0" }}
      >
        <Typography variant={"title"}>Posts</Typography>
      </Flex>
      <Flex>
        {/*<Search value={search} onChange={setSearch} />*/}
        {/*<Select*/}
        {/*  onChange={setSort}*/}
        {/*  selected={pageAndSize.sortDirection}*/}
        {/*  options={selectOptions}*/}
        {/*/>*/}
      </Flex>
      <Flex fDirection={"row"}>
        <Button>Add Post</Button>
      </Flex>
      <Flex fDirection={"row"} fWrap={"wrap"}>
        {posts.map((p) => {
          return <PostElement key={p.id} {...p} />;
        })}
      </Flex>
      <Button
      // onClick={() =>
      //   setPageAndSize((state) => ({
      //     ...state,
      //     pageNumber: state.pageNumber + 1,
      //   }))
      // }
      >
        ShowMore
      </Button>
    </ContentForm>
  );
};
