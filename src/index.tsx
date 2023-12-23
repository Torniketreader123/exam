import React from 'react';
import ReactDOM from 'react-dom/client';
import FetchPage from './fetch';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Input from './input';
import Todo from './todo';
import Post from './post';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([{
  path: "/",
  element: <FetchPage />
},
{
  path: "/input",
  element: <Input />
},
{
  path: "/todo",
  element: <Todo />
},
{
  path:"/Post",
  element:<Post/>
}])

root.render(
  
    <RouterProvider router={router}/>
  
);