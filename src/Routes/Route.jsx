import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Card from "../Pages/Product/Card";
import Product1 from "../Pages/Product/Product1";
import Product2 from "../Pages/Product/Product2";
import Product3 from "../Pages/Product/Product3";
import Product4 from "../Pages/Product/Product4";
import Product5 from "../Pages/Product/Product5";
import Product6 from "../Pages/Product/Product6";

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
        element: <Product1 />,
      },
      {
        path: "/product2",
        element: <Product2 />,
      },
      {
        path: "/product3",
        element: <Product3 />,
      },
      {
        path: "/product4",
        element: <Product4 />,
      },
      {
        path: "/product5",
        element: <Product5 />,
      },
      {
        path: "/product6",
        element: <Product6 />,
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
