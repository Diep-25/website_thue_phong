import React from "react";

// Admin Imports
import Dashboard from './pages/admin/Dashboard'
import Product from './pages/admin/Product'
import Config from './pages/admin/Config'
import Order from './pages/admin/Order'

// Icon Imports
import {
  MdDashboard,
  MdShoppingCart,
  MdSettings,
  MdHome
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdDashboard className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Phòng",
    layout: "/admin",
    path: "products",
    icon: <MdHome className="h-6 w-6" />,
    component: <Product />,
    secondary: true,
  },
  {
    name: "Đơn đặt",
    layout: "/admin",
    path: "order",
    icon: <MdShoppingCart className="h-6 w-6" />,
    component: <Order />,
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
