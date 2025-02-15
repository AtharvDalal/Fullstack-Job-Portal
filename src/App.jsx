import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Applayout from "./layout/app-layout";
import Landing from "./pages/landing";
import Onboarding from "./pages/onboarding";
import JobPage from "./pages/job";
import Joblisting from "./pages/job-listing";
import PostJobs from "./pages/postJobs";
import SaveJobs from "./pages/saveJobs";
import MyJobs from "./pages/myJobs";
import { ThemeProvider } from "./components/ui/theme-provider";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <Joblisting />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <PostJobs />,
      },
      {
        path: "/saved-jobs",
        element: <SaveJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  );
}

export default App;
