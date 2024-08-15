import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div >
      <Navbar/>
      <div >
      <Outlet />
     </div>
      <Footer/>
    </div>
  );
}

export default App;
