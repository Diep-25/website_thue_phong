import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "../public/assets/css/style.css";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="light">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail" element={<Detail />} />
          </Route>
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
