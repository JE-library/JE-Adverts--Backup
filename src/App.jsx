import Overview from "./pages/Vendor/Overview";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import CreateAd from "./pages/Vendor/CreateAd";
import VendorAds from "./pages/Vendor/VendorAds";
import Home from "./pages/User/Home";
import Login from "./pages/auth/Login";
import Details from "./pages/User/Details";
import SignUp from "./pages/auth/Signup";
import Landing from "./pages/Landing";

// import Home from "./pages/Home";
// import User from "./pages/User";
// import Login from "./pages/Login";
// import Details from "./pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/user-home",
      element: <Home />,
    },
    // {
    //     path: "user-page",
    //     element: <User/>,
    //     },

    {
      path: "log-in",
      element: <Login />,
    },
    {
      path: "detail",
      element: <Details />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,

      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "adverts",
          element: <VendorAds />,
        },

        {
          path: "create-ad",
          element: <CreateAd />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
