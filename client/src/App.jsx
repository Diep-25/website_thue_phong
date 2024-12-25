import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import '../public/assets/css/style.css'
import Detail from './pages/Detail'
import Layout from './components/Layout'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
