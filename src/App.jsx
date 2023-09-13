import "./App.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <br />
      <Outlet></Outlet>
    </>
  );
}

export default App;
