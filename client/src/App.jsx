import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "../public/assets/css/style.css";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

// admin
import AdminLayout from './components/admin/Layout'
import LoginAdmin from './pages/admin/Login'
import PrivateRoute from './middleware/PrivateRoute'

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="light">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail" element={<Detail />} />
          </Route>

          <Route path="admin/*" element={<PrivateRoute><AdminLayout /></PrivateRoute>} />

          <Route path="admin/login" element={<LoginAdmin />} />
        </Routes>

      </MantineProvider>
    </>
  );
}

export default App;
