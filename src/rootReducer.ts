import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
