import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Plugins from "./pages/Plugins";
import Setups from "./pages/Setups";
import Others from "./pages/Others";
import Contact from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/setups" element={<Setups />} />
        <Route path="/others" element={<Others />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;