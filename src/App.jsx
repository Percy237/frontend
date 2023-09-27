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
import SecretaryLayout from "./layouts/SecretaryLayout";
import SecretaryHospital from "./views/SecretaryHospital";
import SecretaryDashboard from "./views/SecretaryDashboard";
import SecretaryCivilRegistrar from "./views/SecretaryCivilRegistrar";
import Hospital from "./components/Hospital";
import CreateCivilRegistrar from "./views/CreateCivilRegistrar";
import RegistrarBirth from "./views/RegistrarBirth";
import BirthCertificate from "./views/BirthCertificate";
import BirthDeclaration from "./views/BirthDeclaration";
import HospitalDashboardtable from "./tables/HospitalDashboardtable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "birth-certificate",
    element: <BirthCertificate />,
  },
  {
    path: "/create-birth-declaration",
    element: <BirthDeclaration />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/create-hospital-account",
    element: <CreateHospitalAccount />,
  },
  {
    path: "create-civil-registrar-account",
    element: <CreateCivilRegistrar />,
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
  {
    path: "secretary",
    element: <SecretaryLayout />,
    children: [
      {
        index: ".",
        element: <SecretaryDashboard />,
      },
      {
        path: "hospital",
        element: <SecretaryHospital />,
      },
      {
        path: "civil-registrar",
        element: <SecretaryCivilRegistrar />,
      },
      {
        path: "birth-certificate",
        element: <RegistrarBirth />,
        children: [
          {
            index: ".",
            element: <List />,
          },
          {
            path: "create-birth-certificate",
            element: <CreateCivilRegistrar />,
          },
          {},
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
