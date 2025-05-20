import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducers: {
    app: appSlice,
  },
});
export default store;
