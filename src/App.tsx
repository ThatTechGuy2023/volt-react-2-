import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home'; import Vehicles from './pages/Vehicles'; import VehicleDetails from './pages/VehicleDetails';
import Configurator from './pages/Configurator'; import Technology from './pages/Technology'; import Charging from './pages/Charging';
import About from './pages/About'; import TestDrive from './pages/TestDrive'; import NotFound from './pages/NotFound';
export default function App() {
  return <Routes><Route element={<Layout />}>
    <Route index element={<Home />} /><Route path="vehicles" element={<Vehicles />} /><Route path="vehicles/:slug" element={<VehicleDetails />} />
    <Route path="configure/:slug" element={<Configurator />} /><Route path="technology" element={<Technology />} /><Route path="charging" element={<Charging />} />
    <Route path="about" element={<About />} /><Route path="test-drive" element={<TestDrive />} /><Route path="*" element={<NotFound />} />
  </Route></Routes>;
}
