import React, { useEffect } from "react";
import { Flex } from "../../ui/Flex";
import { GoBack } from "../../common/components/GoBack";
import { Image } from "../../ui/Image";
import { useLocation, useParams } from "react-router-dom";
import { Typography } from "../../ui/Typography";
import { useAllSelector, useAppDispatch } from "../../utils/hooks";
import { setPostsForBlog } from "./thunks/blogsThunks";
import { postsOnBlogStateSelector } from "../../store/selectors";
import { ContentForm } from "../../ui/ContentForm";

export const LayoutCurrenBlog = () => {
  const { backToState } = useLocation().state;
  const posts = useAllSelector(postsOnBlogStateSelector);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    id &&
      dispatch(
        setPostsForBlog({
          id,
          pageNumber: 1,
          pageSize: 10,
          sortDirection: "asc",
        })
      );
  }, [id]);
  useEffect(() => {}, []);
  return (
    <ContentForm fDirection={"column"} bgColor={"#faf7f8"}>
      <Flex fDirection={"column"}>
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
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHQm5eWgXLBy-GRJBWH0p1XOgYkSV0XAb49zigIpX9e0izTM21bb8ADDvToi9Rq80FK0&usqp=CAU"
            }
          />
          <Flex
            fDirection={"column"}
            justify={"flex-start"}
            sx={{ gap: "1rem" }}
          >
            <Flex fDirection={"column"} justify={"center"}>
              <Typography variant={"sub-title-md"}>
                {backToState.name}
              </Typography>
              <Typography variant={"sub-title-sm"}>
                Website:
                <a href={backToState.websiteUrl}>{backToState.websiteUrl}</a>
                {backToState.createdAt}
              </Typography>
            </Flex>
            <Typography variant={"sub-title-sm"}>
              {backToState.description}
            </Typography>
          </Flex>
          <Flex>{JSON.stringify(posts)}</Flex>
        </Flex>
      </Flex>
    </ContentForm>
  );
};
