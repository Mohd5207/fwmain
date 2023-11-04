import React from "react";
import { Navigate } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import Menu from "../pages/Menu/index";
import UserList from "../pages/Userlist/index";
import ProfilePage from "../pages/ProfilePage/index";
import CommunityList from "../pages/CommunityList/index";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  // //profile
  { path: "/profile", component: <UserProfile /> },
  { path: "/indivisualprofilepage", component: <ProfilePage/> },
  
  { path: "/userlist", component: <UserList /> },
  { path: "/communitylist", component: <CommunityList /> },
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
];

const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: <Navigate to="/communitylist" />,
  },
  { path: "/menu", component: <Menu /> },
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
