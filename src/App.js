import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Meetups from "./pages/meetups";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/meetups",
        element: <Meetups />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
