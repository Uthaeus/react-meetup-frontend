import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Meetups from "./pages/meetups";
import MeetupDetail from "./components/meetup/meetup-detail";
import NewMeetup from "./components/meetup/new-meetup";
import EditMeetup from "./components/meetup/edit-meetup";

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
      },
      {
        path: "/meetups/:meetupId",
        element: <MeetupDetail />
      },
      {
        path: "/new-meetup",
        element: <NewMeetup />
      },
      {
        path: "/meetups/:meetupId/edit",
        element: <EditMeetup />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
