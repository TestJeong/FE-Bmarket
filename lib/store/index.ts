import { Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducer, { rootReducer } from "./reducer";

export interface State {
  loading: string;
  user: string;
}

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  });

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
