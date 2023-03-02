export interface IPost {
  id: string;
  blogId: string;
  content: string;
  shortDescription: string;
  title: string;
  blogName: string;
  createdAt: string;
}
export interface IState {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: IPost[];
}
