import React, { useEffect, useState } from "react";
import { ContentForm } from "../../ui/ContentForm";
import { Flex } from "../../ui/Flex";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { loadNewBlogs, setBlogs } from "../../store/thunks/blogsThunks";
import {
  appStateSelector,
  authStateSelector,
  blogsStateSelector,
} from "../../store/selectors";
import { BlogsElement } from "./BlogsElement";
import { Search } from "../../ui/Search";
import { Select } from "../../ui/Selector";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { Route, Routes, useParams } from "react-router-dom";
import { LayoutCurrenBlog } from "./LayoutCurrenBlog";
import { Preloader } from "../../ui/Preloader";
import { Modal } from "../../ui/Modal/Modal";
import { ModalBase } from "../../ui/Modal/ModalBase";
import { AddNewBlog } from "./Modals/AddNewBlog";

type SortType = "0" | "asc" | "desc";
interface IFetchType {
  pageNumber: number;
  pageSize: number;
  sortDirection: SortType;
  searchNameTerm: string;
}
export const selectOptions = {
  ["0"]: "Old blogs first",
  ["asc"]: "From A to Z",
  ["desc"]: "From Z to A",
};
export const Blogs = () => {
  const dispatch = useAppDispatch();
  const [open, setModal] = useState(false);
  const { items, totalCount, pagesCount, page, pageSize } =
    useAllSelector(blogsStateSelector);
  const { isLoading } = useAllSelector(appStateSelector);
  const { isAdmin } = useAllSelector(authStateSelector);

  const [search, setSearch] = useState<string>("");
  // const [sort, setSort] = useState<any>(selectOptions[0].UIValue);
  const [pageAndSize, setPageAndSize] = useState<IFetchType>({
    pageNumber: page,
    pageSize: pageSize,
    sortDirection: "0",
    searchNameTerm: search,
  });
  const checkSize =
    page + 1 === pageSize ? totalCount - items.length : pageSize;
  useEffect(() => {
    dispatch(setBlogs(pageAndSize));
  }, [pageAndSize]);
  const { id } = useParams();
  const handleOpenModal = () => {
    setModal((modal) => !modal);
  };
  const HandlerLoadNewBlogs = () => {
    if (checkSize && pagesCount !== page + 1) {
      dispatch(
        loadNewBlogs({
          ...pageAndSize,
          pageNumber: page + 1,
          pageSize: checkSize,
        })
      );
    }
  };
  const setSearchOnFetch = useDebounce(
    (e) => setPageAndSize((state) => ({ ...state, searchNameTerm: e })),
    700
  );
  const searchWithDelay = (e: string) => {
    setSearch(e);
    setSearchOnFetch(e);
  };

  const setSort = (o: SortType) => {
    setPageAndSize((state) => ({ ...state, sortDirection: o }));
  };

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
            <Typography variant={"title"}>Blogs</Typography>
          </Flex>
          <Flex>
            <AddNewBlog isOpen={open} handleClose={() => setModal(false)} />
            <Search value={search} onChange={searchWithDelay} />
            <Select
              onChange={setSort}
              selected={pageAndSize.sortDirection}
              options={selectOptions}
            />
            {isAdmin && (
              <Flex fDirection={"row"} justify={"end"}>
                <Button onClick={handleOpenModal}>Add blog</Button>
              </Flex>
            )}
          </Flex>
          <Flex fDirection={"column"} sx={{ borderTop: "1px solid black" }}>
            {items.map((b) => {
              return <BlogsElement key={b.id} {...b} />;
            })}
          </Flex>
          <Button
            disabled={!(checkSize && pagesCount !== page + 1)}
            onClick={HandlerLoadNewBlogs}
          >
            ShowMore
          </Button>
        </>
      )}
    </ContentForm>
  );
};
