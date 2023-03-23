import { Routes } from "react-router";
import { Route } from "react-router";
import Layout from "./components/page/layout/layout";
import Home from "./components/page/home/Home";
import Cart from "./components/page/Cart/Cart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
