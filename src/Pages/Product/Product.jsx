import image1 from "../../assets/2-2-removebg-preview.png";
import image2 from "../../assets/1-removebg-preview.png";
import image3 from "../../assets/5-252x300-removebg-preview.png";
import image4 from "../../assets/3-2-removebg-preview.png";
import point from "../../assets/point.png";
import star from "../../assets/star.png";
import image5 from "../../assets/4-2.jpg";

const Product = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 bg-[#ffe4bb] rounded-lg">
      {/* <h1 className="text-2xl font-bold">Product</h1> */}
      {/* Image section  */}
      <div className="flex flex-col md:flex-row gap-6 pt-12 justify-between p-4">
        <div>
          <img
            className="md:w-60 rounded-lg"
            src={image1}
            alt="product image"
          />
          <h1 className="text-center italic font-medium text-xl">Paraben Free</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-12">
          <img className="rounded-lg" src={image2} alt="product image" />
          <img
            className="lg:w-60 rounded-lg"
            src={image3}
            alt="product image"
          />
        </div>
        <div className="hidden md:block">
          <img
            className="md:w-60 rounded-lg"
            src={image4}
            alt="product image"
          />
        </div>
      </div>
      {/* text section */}
      <div className="mt-8 px-4">
        <h2 className="text-center text-2xl font-semibold text-[#ed7e00]">
          Water Resistant & Oil Free Micronized Sunscreen Aqua Gel
        </h2>
        {/* INDICATIONS text  */}
        <div className="flex flex-col lg:items-center lg:justify-center mt-8 gap-4">
          <h3 className="text-2xl font-bold text-red-500">INDICATIONS</h3>
          {/* icon and text */}
          <div className="space-y-5 px-4">
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Melasma</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Age Spots</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Hyper Pigmentation</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Brightening & Lightening</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Appearance of Dark Spots</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Produces Collagen</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Post Acne Black Spots</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Skin Damage From Sunlight
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Repair & Help Impove The Dull
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Rejuvenation</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px] font-bold">Anti-Aging</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Out Looking Blank Problem, Hyper-Pigmentation Spots
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Protect Skin From Dryness, Maintain Moisture Level, Repair Skin,
                Lighten Sports, Impove Uneven Skin Tone.
              </p>
            </div>
          </div>
        </div>
        {/* Image For mobile phone  */}
        <div className="mt-8 md:hidden">
          <img className="rounded-lg" src={image4} alt="" />
        </div>

        {/* COMPOSITION */}
        <div className="mt-14">
          <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-red-500 ">
            INDICATIONS
          </h3>
          <div className="mt-5 lg:max-w-[900px] mx-auto flex flex-wrap gap-8 items-center ">
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">L-Glutathione</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Kojic Acid Dipalmitate</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Arbutin</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Vitamin E</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Aloe Vera</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Titanium Dioxide</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Soap Noodles</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Fragrance</p>
            </div>
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="lg:max-w-[900px] mx-auto mt-12 px-4">
        <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-[#9c00ea]">
          DESCRIPTION
        </h3>
        <p className="mt-3 text-slate-600">
          A skin whitening soap works by removing melanin from your skin’s
          epidermal layer, making it look white and fairer then other areas on
          the body. Furthermore, this type of soap Works by removing the dead
          calls on your face or body and giving it a fresh look.
        </p>
        <h3 className="text-2xl mt-12 lg:max-w-[900px] mx-auto font-bold text-[#9c00ea9e]">
          INGREDIENTS
        </h3>
        <div>
          <h4 className="text-xl mt-12 lg:max-w-[900px] mx-auto font-semibold">
            Kojic Acid Dipalmitate:
          </h4>
          <p className="mt-3 text-slate-600">
            A skin whitening soap works by removing melanin from your skin’s
            epidermal layer, making it look white and fairer then other areas on
            the body. Furthermore, this type of soap Works by removing the dead
            calls on your face or body and giving it a fresh look.
          </p>
        </div>
        <div>
          <h4 className="text-xl mt-12 lg:max-w-[900px] mx-auto font-semibold">
          Vitamin E:
          </h4>
          <p className="mt-3 text-slate-600">
            A skin whitening soap works by removing melanin from your skin’s
            epidermal layer, making it look white and fairer then other areas on
            the body. Furthermore, this type of soap Works by removing the dead
            calls on your face or body and giving it a fresh look.
          </p>
        </div>
        <div>
          <h4 className="text-xl mt-12 lg:max-w-[900px] mx-auto font-semibold">
          L-Glutathione:
          </h4>
          <p className="mt-3 text-slate-600">
            A skin whitening soap works by removing melanin from your skin’s
            epidermal layer, making it look white and fairer then other areas on
            the body. Furthermore, this type of soap Works by removing the dead
            calls on your face or body and giving it a fresh look.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#821a1a] mt-12 lg:max-w-[900px] mx-auto font-semibold">
          DIRECTION OF USE
          </h4>
          <p className="mt-3 text-slate-600">
            A skin whitening soap works by removing melanin from your skin’s
            epidermal layer, making it look white and fairer then other areas on
            the body. Furthermore, this type of soap Works by removing the dead
            calls on your face or body and giving it a fresh look.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-red-500 mt-12 lg:max-w-[900px] mx-auto font-semibold">
          WARNINIGS
          </h4>
          <p className="mt-3 text-slate-600">
            A skin whitening soap works by removing melanin from your skin’s
            epidermal layer, making it look white and fairer then other areas on
            the body. Furthermore, this type of soap Works by removing the dead
            calls on your face or body and giving it a fresh look.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#0019bc] mt-12 lg:max-w-[900px] mx-auto font-semibold">
          SUPPLY : 75gm Per PACK.
          </h4>
        </div>
      </div>
      {/* Image  */}
      <div className="mt-8 ">
        <img className="rounded-lg" src={image5} alt="image " />
      </div>
    </div>
  );
};

export default Product;
