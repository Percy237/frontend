import Login from "./views/Login";
import Hospital from "./views/Hospital";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hospital",
    element: <Hospital />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
