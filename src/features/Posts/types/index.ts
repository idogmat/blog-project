export interface IPost {
  id: string;
  blogId: string;
  content: string;
  shortDescription: string;
  title: string;
  blogName: string;
  createdAt: string;
}
export interface IStatePosts {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: IPost[];
}
export type IPostAPI = {
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
};
