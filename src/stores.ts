import { createContext, useContext } from "react";
import TodoStore from "./store/TodoStore";

const store = {
  todoStore: new TodoStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;