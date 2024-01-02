import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  const Layout = () => {
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>;
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
        },
      ],
    },
  ]);

  return;
};

export default App;
