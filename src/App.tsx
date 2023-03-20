import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from "mobx-react";
import { stores, StoresContext } from "./stores";
import { useRouterStore } from '@/stores';
import router from '@/router';
import 'antd/dist/reset.css';
import './App.css'

const App: React.FC = () => {
  const RouterStore = useRouterStore();
  RouterStore.addRoute(router);
  return (
    <Provider {...stores}>
      <StoresContext.Provider value={stores}>
        {useRoutes(router)}
      </StoresContext.Provider>
    </Provider>
  );
};

export default App;