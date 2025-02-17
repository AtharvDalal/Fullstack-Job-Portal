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
import ProtectedRoute from "./components/protected-route";

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
        element: (
          <ProtectedRoute>
            <Onboarding />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Joblisting />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJobs />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SaveJobs />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
