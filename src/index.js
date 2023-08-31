import React from 'react';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import App from './App';
import AboutSection from './components/AboutSection';
import './styles/elements/base.css';
import './styles/generic/reset.css';
import './styles/settings/colors.css';
import './styles/settings/size.css';
import './styles/settings/spacing.css';
import Hashtag from './components/Hashtag';

const router = createBrowserRouter([
  {
    path: '/',
    element: < App/>,
    children: [
      {
        path: 'game',
        element: <Hashtag />
      },
      {
        path: 'about',
        element: <AboutSection />
      },
    ]
  },
]);

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <RouterProvider router={router} />
);
