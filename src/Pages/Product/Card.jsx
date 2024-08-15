import melagm from "../../assets/MelagmEKCream.jpg";

const Card = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 mt-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 place-content-center justify-items-center gap-6">
        <div className="text-center border p-3 hover:shadow">
          <img src={melagm} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </div>
        <div className="text-center border p-3 hover:shadow">
          <img src={melagm} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </div>
        <div className="text-center border p-3 hover:shadow">
          <img src={melagm} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </div>
        <div className="text-center border p-3 hover:shadow">
          <img src={melagm} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </div>
        <div className="text-center border p-3 hover:shadow">
          <img src={melagm} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </div>
        <div className="text-center border p-3 hover:shadow">
          <img src={melagm} alt="Melagm-EK Cream" />
          <p className="font-bold mt-4">Melagm-EK Cream</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
