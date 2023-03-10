import React, { useEffect, useState } from "react";
import { ContentForm } from "../../ui/ContentForm";
import { Flex } from "../../ui/Flex";
import { Typography } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { clearBlogs, loadNewBlogs, setBlogs } from "./thunks/blogsThunks";
import {
  appStateSelector,
  authStateSelector,
  blogsStateSelector,
} from "../../store/selectors";
import { BlogsElement } from "./BlogsElement";
import { Search } from "../../ui/Search";
import { Select } from "../../ui/Selector";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import { AddNewBlog } from "./Modals/AddNewBlog";
import { Preloader } from "../../ui/Preloader";
import { IFetchType, selectOptions, SortType } from "./types";

export const Blogs = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [open, setModal] = useState(false);
  const { items, totalCount, pagesCount, page, pageSize } =
    useAllSelector(blogsStateSelector);
  const { isAdmin, isInitialized } = useAllSelector(authStateSelector);
  const { isLoading } = useAllSelector(appStateSelector);
  const [search, setSearch] = useState<string>("");
  // const [sort, setSort] = useState<any>(selectOptions[0].UIValue);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);

  const [pageAndSize, setPageAndSize] = useState<IFetchType>({
    pageNumber: "1",
    pageSize: "10",
    sortDirection: "0",
    searchNameTerm: search,
  });
  console.log(params);
  const checkSize =
    page === pageSize ? totalCount - Object.keys(items).length : pageSize;
  useEffect(() => {
    dispatch(setBlogs(params));
    // return () => dispatch(clearBlogs());
  }, [searchParams]);

  const handleOpenModal = (): void => {
    setModal((modal) => !modal);
  };
  const handlerLoadNewBlogs = (): void => {
    if (page <= pagesCount) {
      // dispatch(
      //   loadNewBlogs({
      //     ...params,
      //     pageNumber: (page + 1).toString(),
      //   })
      // );

      setSearchParams({
        ...params,
        pageNumber: (page + 1).toString(),
      });
    }
  };
  const setSearchOnFetch = useDebounce(
    (e) =>
      setSearchParams({
        ...params,
        searchNameTerm: e,
      }),
    700
  );
  const searchWithDelay = (e: string): void => {
    setSearch(e);
    setSearchOnFetch(e);
  };

  const setSort = (o: SortType): void => {
    setSearchParams({
      ...params,
      sortDirection: o,
      pageNumber: 1 + "",
      pageSize: items.length + "",
    }),
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
            {Object.keys(items).map((k) => {
              return <BlogsElement key={k} {...items[k]} />;
            })}
          </Flex>
          <Button disabled={page > pagesCount} onClick={handlerLoadNewBlogs}>
            ShowMore
          </Button>
        </>
      )}
    </ContentForm>
  );
};
