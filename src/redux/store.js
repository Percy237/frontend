import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./sidebar";

export default configureStore({
  reducer: {
    Sidebar: SidebarReducer,
  },
});
