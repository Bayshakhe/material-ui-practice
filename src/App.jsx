import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
