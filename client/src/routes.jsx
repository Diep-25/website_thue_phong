import React from "react";

// Admin Imports
import Dashboard from './pages/admin/Dashboard'
import Product from './pages/admin/Product'

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
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


];
export default routes;
