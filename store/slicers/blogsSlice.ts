import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addBlog, loadNewBlogs, setBlogs } from "../thunks/blogsThunks";

export interface IBlog {
  id: string;
  description: string;
  websiteUrl: string;
  name: string;
  createdAt: string;
}
interface IState {
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
  items: IBlog[];
}
const initialState: IState = {
  page: 1,
  pageSize: 10,
  pagesCount: 4,
  totalCount: 33,
  items: [],
};

const authSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      return action.payload.data;
    },
    setPageBlogs: (state, action) => {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setBlogs.fulfilled, (state, action) => {
      return { ...action.payload.data };
    });
    builder.addCase(loadNewBlogs.fulfilled, (state, action) => {
      return {
        ...action.payload.data,
        items: [...state.items, ...action.payload.data.items],
      };
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      return {
        ...state,
        items: [...action?.payload?.data.items, ...state.items],
      };
    });
    //     .addCase(logOutTC.fulfilled, (state, action) => {
    //         state.isAuth = false;
    //     })
    //     .addCase(authMeTC.fulfilled, (state, action) => {
    //         state.isAuth = true;
    //     });
  },
});

export const blogsSlicer = authSlice.reducer;
export const blogsAC = authSlice.actions;
