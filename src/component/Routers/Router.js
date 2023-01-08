import Aboutme from "../Pages/Aboutme/Aboutme";
import Blog from "../Pages/Blog/Blog";
import HomeLayout from "../Pages/Home/HomeLayout/HomeLayout";
import SendMail from "../Pages/Home/SendMail/SendMail";
import Details from "../Pages/Projects/Details/Details";

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
            path:':id',
            element:<Details></Details>
           
        },
        {
            path:'/contact',
            element:<SendMail></SendMail>
        },
        
        {
            path:'/about',
            element:<Aboutme></Aboutme>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        
      ]
    },
  ]);