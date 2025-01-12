import React from "react";

// Admin Imports
import Dashboard from './pages/admin/Dashboard'
import Product from './pages/admin/Product'
import Config from './pages/admin/Config'

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdSettings
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Phòng",
    layout: "/admin",
    path: "products",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Product />,
    secondary: true,
  },
  {
    name: "Thiết định",
    layout: "/admin",
    path: "config",
    icon: <MdSettings className="h-6 w-6" />,
    component: <Config />,
    secondary: true,
  },


];
export default routes;
