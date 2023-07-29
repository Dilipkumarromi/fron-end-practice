import "./App.css";
import Home from "./Component/Home/Home";
import Route from './Router/Router'
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
      {/* <Home /> */}
      <Outlet/>
      <Route/>
    </>
  );
}

export default App;
