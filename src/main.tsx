import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Projects from './routes/Projects/Projects';
import Resume from './routes/Resume /Resume';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'projects',
                    element: <Projects />,
                },
                {
                    path: 'resume',
                    element: <Resume />,
                },
            ],
        },
    ],
    { basename: '/vite-portfolio' },
);

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
