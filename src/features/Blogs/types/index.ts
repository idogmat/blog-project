export interface IPostsInBlog {
  blogId: string;
  blogName: string;
  content: string;
  createdAt: string;
  extendedLikesInfo: {
    likesCount: number;
    dislikesCount: number;
    myStatus: string;
    newestLikes: any[];
  };
  id: string;
  shortDescription: string;
  title: string;
}

export interface IBlog {
  id: string;
  description: string;
  websiteUrl: string;
  name: string;
  createdAt: string;
  posts: IPostsInBlog[];
}

export interface IStateBlogs {
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
  items: {
    [key: string]: IBlog;
  };
}
export type IBlogAPI = Pick<IBlog, "name" | "description" | "websiteUrl">;

export const selectOptions = {
  ["0"]: "Old blogs first",
  ["asc"]: "From A to Z",
  ["desc"]: "From Z to A",
};
export type SortType = "0" | "asc" | "desc";
export interface IFetchType {
  pageNumber: string;
  pageSize: string;
  sortDirection: SortType;
  searchNameTerm: string;
}
