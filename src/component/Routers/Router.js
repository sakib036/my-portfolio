import HomeLayout from "../Pages/Home/HomeLayout/HomeLayout";
import SendMail from "../Pages/Home/SendMail/SendMail";

const { createBrowserRouter } = require("react-router-dom");

const { default: Main } = require("../Pages/Layout/Main/Main");
const { default: Projects } = require("../Pages/Projects/Projects");

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        
        {
            path:'/',
            element:<HomeLayout></HomeLayout>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        },
        {
            path:'/contact',
            element:<SendMail></SendMail>
        },
        
      ]
    },
  ]);