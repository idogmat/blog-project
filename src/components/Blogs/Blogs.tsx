import React, { useEffect, useRef, useState } from "react";
import { ContentForm } from "../../ui/ContentForm";
import { Flex } from "../../ui/Flex";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { setBlogs } from "../../store/thunks/blogsThunks";
import { blogsStateSelector } from "../../store/selectors";
import { BlogsElement } from "./BlogsElement";
import { Search } from "../../ui/Search";
import { Select } from "../../ui/Selector";
type SortType = "0" | "asc" | "desc";
interface IFetchType {
  pageNumber: number;
  pageSize: number;
  sortDirection: SortType;
}
export const selectOptions = {
  ["0"]: "Old blogs first",
  ["asc"]: "From A to Z",
  ["desc"]: "From Z to A",
};
export const Blogs = () => {
  const dispatch = useAppDispatch();
  const blogs = useAllSelector(blogsStateSelector);
  const [search, setSearch] = useState<string>("");
  // const [sort, setSort] = useState<any>(selectOptions[0].UIValue);
  const [pageAndSize, setPageAndSize] = useState<IFetchType>({
    pageNumber: 1,
    pageSize: 10,
    sortDirection: "0",
  });
  const setSort = (o: SortType) => {
    setPageAndSize((state) => ({ ...state, sortDirection: o }));
  };
  const ref = useRef();
  useEffect(() => {
    dispatch(setBlogs(pageAndSize));
  }, [pageAndSize]);
  return (
    <ContentForm fDirection={"column"} bgColor={"#faf7f8"}>
      <Flex
        fDirection={"column"}
        sx={{ borderBottom: "1px solid black", margin: "1rem 0" }}
      >
        <Typography variant={"title"}>Blogs</Typography>
      </Flex>
      <Flex>
        <Search value={search} onChange={setSearch} />
        <Select
          onChange={setSort}
          selected={pageAndSize.sortDirection}
          options={selectOptions}
        />
      </Flex>
      <Flex fDirection={"row"} justify={"end"}>
        <Button>Add blog</Button>
      </Flex>
      <Flex fDirection={"column"}>
        {blogs.map((b) => {
          return <BlogsElement key={b.id} {...b} />;
        })}
      </Flex>
      <Button
        onClick={() =>
          setPageAndSize((state) => ({
            ...state,
            pageNumber: state.pageNumber + 1,
          }))
        }
      >
        ShowMore
      </Button>
    </ContentForm>
  );
};
