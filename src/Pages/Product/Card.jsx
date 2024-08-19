import { Link } from "react-router-dom";
import melagm from "../../assets/MelagmEKCream.jpg";
import image1 from "../../assets/product/Inthyglow Cream.png";
import image2 from "../../assets/product/INTHYGLOW Psd.png";
import image3 from "../../assets/product/inthyon Soap.png";
import image4 from "../../assets/product/Inthyrid Anti Acne Gel.png";
import image5 from "../../assets/product/inthyrid soap.png";
import image6 from "../../assets/product/Inthysun Psd.png";
import image7 from "../../assets/product/Inthyzol luliconazol Cream.png";

const Card = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 place-content-center justify-items-center gap-6">
        <Link
          to="/product"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="w-72" src={image1} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </Link>
        <Link
          to="/product1"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="w-72" src={image2} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </Link>
        <Link
          to="/product2"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="w-72" src={image3} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </Link>
        <Link
          to="/product3"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="w-72" src={image4} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </Link>
        <Link
          to="/product4"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="w-72" src={image5} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </Link>
        <Link
          to="/product5"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="w-72" src={image6} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </Link>
        <Link
          to="/product6"
          className="text-center border rounded-lg p-3 hover:shadow"
        >
          <img className="w-72" src={image7} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
