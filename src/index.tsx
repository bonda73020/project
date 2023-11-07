import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {ContextProvider} from "./hoc/ContextProvider";
import {router} from "./router";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
   </ContextProvider>
);

