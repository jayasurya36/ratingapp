import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import PostRatings from './components/PostRatings/PostRatings';
import Ratings from './components/Ratings/Ratings';
import { HelmetProvider } from "react-helmet-async";

const AppLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

/**
 * Creating separate Routes for separate pages
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Ratings />
      },
      {
        path: '/postRatings',
        element: <PostRatings />
      }
    ]
  }
])

function App() {
  // HelmetProvider is used to create context and prevent memory leaks
  return <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
}

export default App;
