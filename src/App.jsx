import Login from "./views/Login";
import CreateHospitalAccount from "./views/CreateHospitalAccount";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./views/ErrorPage";
import HospitalBirthDeclaration from "./views/HospitalBirthDeclaration";
import HospitalLayout from "./layouts/HospitalLayout";
import HospitalDashboard from "./views/HospitalDashboard";
import HospitalDeathDeclaration from "./views/HospitalDeathDeclaration";
import ForgotPassword from "./views/ForgotPassword";
import CreateBirthDeclaration from "./components/CreateBirthDeclaration";
import List from "./components/List";
import CreateDeathDeclaration from "./components/CreateDeathDeclaration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "createHospital",
    element: <CreateHospitalAccount />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "hospital",
    element: <HospitalLayout />,
    children: [
      {
        index: ".",
        element: <HospitalDashboard />,
      },
      {
        path: "birth",
        element: <HospitalBirthDeclaration />,
        children: [
          {
            index: ".",
            element: <List />,
          },
          {
            path: "create",
            element: <CreateBirthDeclaration />,
          },
        ],
      },
      {
        path: "death",
        element: <HospitalDeathDeclaration />,
        children: [
          {
            index: ".",
            element: <List />,
          },
          {
            path: "create",
            element: <CreateDeathDeclaration />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
