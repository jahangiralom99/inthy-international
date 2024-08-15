import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Product1 from "../Pages/Product/Product1";
import Card from "../Pages/Product/Card";
import Product2 from "../Pages/Product/Product2";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product1",
        element: <Product2 />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default Route;
