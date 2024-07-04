import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main />,
            errorElement: "",
            children: [
                  { path: "/", element: <Home /> },
                  { path: "/contact", element: <ContactUs /> },
                  { path: "/signIn", element: <SignIn /> },
                  { path: "/signUp", element: <SignUp /> },

            ]


      },
]);


