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
