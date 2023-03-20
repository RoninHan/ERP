import { createContext, useContext } from "react";
import RouterStore from "./routerStore";

export const createStores = () => {
    return {
        RouterStore: new RouterStore()
    }

};

export const stores = createStores();

export const StoresContext = createContext(stores);

const useStores = () => useContext(StoresContext);

export function useRouterStore() {
    const { RouterStore } = useStores();
    return RouterStore;
}