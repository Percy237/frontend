import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./sidebar";
import userReducer from "./feature/user";

export default configureStore({
  reducer: {
    Sidebar: SidebarReducer,
    user: userReducer,
  },
});
