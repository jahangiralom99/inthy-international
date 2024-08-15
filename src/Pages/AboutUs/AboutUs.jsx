import image1 from "../../assets/pic-2-768x576.jpg";
import image2 from "../../assets/pic-1-250x250.jpg";
import image3 from "../../assets/pic-3.jpg";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mt-6 mx-auto px-4 text-[#333] flex flex-col md:flex-row gap-5">
      {/* About us Text */}
      <div>
        <div>
          <h1 className="text-2xl font-medium">ABOUT US:</h1>
          <p className="mt-4">
            GM Trade International specially Skin Care Cosmetics Products
            Importer company in Bangladesh, its Imports with a fresh, inventive
            approach to Skin Care and is committed itself to provide efficient,
            reliable products with high quality and safety profile while serving
            the professionals. The company’s expertise focuses on the
            formulation of highly effective, yet cosmetically elegant, skin care
            treatments and also focuses on World Class Packaging.
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-medium">VISION AND MISSION:</h1>
          <p className="mt-2">
            I have always believed that great companies that are founded with a
            strong vision and built on solid values are the ones that thrive and
            progress.
          </p>
          <p className="mt-4">
            Our company’s focus is on developing novel and advanced skin care
            products. Our innovative line of products has seen quick adoption by
            Skin Care.
          </p>
          <p className="mt-4">
            These are the companies that overcome challenges and excel beyond
            the competition, beyond economic cycles and eventually beyond
            lifetimes and generations.
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-medium">QUALITY POLICY: </h1>
          <p className="mt-2">
            We have a highly qualified and experienced management team who
            drives the company’s strategy, policies and monitors progress
            towards meeting our objectives. These are experienced professionals
            who have come together from the fields of marketing finance,
            production, R&D and other operational areas.
          </p>
          <p className="mt-4">
            Prior to concluding, I would like to thank our Associates for their
            trust, all of our employees for their commitment, and our business
            partners for their continued and valuable support.
          </p>
        </div>
      </div>
      {/* About us image */}
      <div className="flex flex-col gap-6">
        <div className="border rounded-md">
          <img className="p-3 rounded-md" src={image1} alt="" />
        </div>
        <div className="border rounded-md">
          <img className="p-3 rounded-md" src={image2} alt="" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Manufacturer, India</h1>
          <div className="border rounded-md mt-5">
            <img className="p-3 rounded-md" src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
