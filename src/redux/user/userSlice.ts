import { createSlice } from "@reduxjs/toolkit";

type Props = {
  count: number;
};

const initialState: Props = {
  count: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
