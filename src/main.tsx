import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';

import amplifyconfig from '../amplifyconfiguration.json';
import App from './App.tsx'
import '@aws-amplify/ui-react/styles.css';
import './index.css'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.tsx';
import MyPage from './MyPage.tsx';

Amplify.configure(amplifyconfig);

const checkForUser = async () => {
  // Check whether we are logged in
  // and redirect to /login if no
  try {
    await getCurrentUser();
    console.log('hello');
  } catch (error) {
    console.log(error);
    // if you know you can't render the route, you can
    // throw a redirect to stop executing code here,
    // sending the user to a new route
    throw redirect("/login");
  }
  return null;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: checkForUser,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/my-page/:mySearch",
    element: <MyPage key={window.location.pathname} />,
    loader: checkForUser,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
