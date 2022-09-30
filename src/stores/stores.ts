import { createContext, useContext } from "react";
import { configure } from "mobx"
import TodoStore from "./TodoStore";

configure({
  enforceActions: "never",
})

const store = {
  todoStore: new TodoStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;