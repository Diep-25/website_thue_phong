import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "../public/assets/css/style.css";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import './App.css'
import 'react-slideshow-image/dist/styles.css'
import { useNavigate } from "react-router-dom";

// admin
import AdminLayout from './components/admin/Layout'
import LoginAdmin from './pages/admin/Login'
import PrivateRoute from './middleware/PrivateRoute'
import fetchData from "./axios"

const URL_API = import.meta.env.VITE_URL_API

function App() {
    const navigate = useNavigate();

    const countVisitors = async () => {

      try {

        await fetchData(`${URL_API}api/visits`, 'GET');

      } catch (error) {
  
        if (error?.response?.data?.message === "Invalid token") {
          handleInvalidToken(navigate);
        }
        
      } 
    }
    useEffect(() => {
      countVisitors();
  }, []);
  return (
    <>
      <MantineProvider defaultColorScheme="light">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>

          <Route path="admin/*" element={<PrivateRoute><AdminLayout /></PrivateRoute>} />

          <Route path="admin/login" element={<LoginAdmin />} />
        </Routes>

      </MantineProvider>
    </>
  );
}

export default App;
