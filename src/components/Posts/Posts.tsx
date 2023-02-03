import React, { useEffect, useState } from "react";
import { Flex } from "../../ui/Flex";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { ContentForm } from "../../ui/ContentForm";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { appStateSelector, postsStateSelector } from "../../store/selectors";
import { PostElement } from "./PostElement";
import { setPosts } from "../../store/thunks/postsThunks";
import { Preloader } from "../../ui/Preloader";
import { Select } from "../../ui/Selector";
type SortType = "0" | "asc" | "desc";
interface IFetchType {
  pageNumber: number;
  pageSize: number;
  sortDirection: SortType;
}
export const selectOptions = {
  ["asc"]: "New posts first",
  ["desc"]: "Old blogs first",
};
export const Posts = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAllSelector(appStateSelector);
  const { items, totalCount, pagesCount, pageSize, page } =
    useAllSelector(postsStateSelector);
  const [pageAndSize, setPageAndSize] = useState<IFetchType>({
    pageNumber: page,
    pageSize: pageSize,
    sortDirection: "asc",
  });

  const checkSize =
    page + 1 === pageSize ? totalCount - items.length : pageSize;

  const setSort = (o: SortType) => {
    setPageAndSize((state) => ({ ...state, sortDirection: o }));
  };

  useEffect(() => {
    dispatch(setPosts({}));
  }, []);
  return (
    <ContentForm fDirection={"column"} bgColor={"#faf7f8"}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Flex
            fDirection={"column"}
            sx={{ borderBottom: "1px solid black", margin: "1rem 0" }}
          >
            <Typography variant={"title"}>Posts</Typography>
          </Flex>
          {/*<Flex>*/}
          {/*<Search value={search} onChange={setSearch} />*/}
          {/*<Select*/}
          {/*  onChange={setSort}*/}
          {/*  selected={pageAndSize.sortDirection}*/}
          {/*  options={selectOptions}*/}
          {/*/>*/}
          {/*</Flex>*/}
          {/*<Flex fDirection={"row"}>*/}
          {/*  <Button>Add Post</Button>*/}
          {/*</Flex>*/}
          <Select
            onChange={setSort}
            selected={pageAndSize.sortDirection}
            options={selectOptions}
          />
          <Flex fDirection={"row"} fWrap={"wrap"} sx={{ gap: "1rem" }}>
            {items.map((p) => {
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
        </>
      )}
    </ContentForm>
  );
};
