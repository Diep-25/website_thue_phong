import { Outlet } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Toaster />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
