/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/Screenshot_2024-08-19_121847-removebg-preview.png";
import image2 from "../../assets/Screenshot_2024-08-19_121429-removebg-preview.png";
import image4 from "../../assets/Screenshot_2024-08-19_121912-removebg-preview.png";
import point2 from "../../assets/Screenshot_2024-08-19_121913-removebg-preview.png";
import point from "../../assets/point.png";
import star from "../../assets/star.png";
import image5 from "../../assets/Screenshot 2024-08-17 131612.png";

const Product3 = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 bg-[#d3effc] rounded-lg">
      {/* <h1 className="text-2xl font-bold">Product</h1> */}
      {/* Image section  */}
      <div className="flex flex-col md:flex-row gap-6 pt-12 justify-between p-4">
        <div>
          <img
            className="md:w-60 rounded-lg"
            src={image1}
            alt="product image"
          />
        </div>
        <div className="flex flex-col items-center  gap-6">
          <img className="rounded-lg" src={image2} alt="product image" />
          {/* <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-2xl font-bold">ARBUTIN</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-2xl font-bold">GLUTATHION</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-2xl font-bold">KOJIC ACID</p>
          </div> */}
          {/* <img
            className="lg:w-60 rounded-lg"
            src={image3}
            alt="product image"
          /> */}
        </div>
        <div className="hidden md:flex flex-col items-center justify-center">
          <img
            className="md:w-60 rounded-lg"
            src={image4}
            alt="product image"
          />
          <img
            className="md:w-60 rounded-lg"
            src={point2}
            alt="product image"
          />
        </div>
      </div>
      {/* text section */}
      <div className="px-4">
        {/* <h2 className="text-center text-2xl font-semibold text-[#ed7e00]">
          Water Resistant & Oil Free Micronized Sunscreen Aqua Gel
        </h2> */}
        {/* INDICATIONS text  */}
        <div className="flex flex-col lg:max-w-[900px] mx-auto mt-6 gap-4">
          <h3 className="text-2xl font-bold text-red-500">TREATMENT FOR:</h3>
          {/* icon and text */}
          <div className="space-y-5 px-4">
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">All Fungal infection</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Candidal Vulvo-Vaginitis</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Tinea Corporis</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Tinea Pedis Seborrhoeic Dermatitis{" "}
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Relives from itching & irritation causes by body fungus
              </p>
            </div>
          </div>
        </div>
        {/* Image For mobile phone  */}
        <div className="mt-6 md:hidden">
          <img className="rounded-lg w-full" src={image4} alt="" />
        </div>

        {/* COMPOSITION */}
        <div className="mt-6 lg:ml-6">
          <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-[#9c00ea] ">
            COMPOSITION:
          </h3>
          <div className="mt-6 text-red-800 lg:max-w-[900px] mx-auto flex flex-wrap gap-6 items-center ">
            <div className="flex gap-6 items-center ">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px] font-bold">
                Ketoconazole........2.00%w/w
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">
                Zinc Pyrithione.... 1.00%w/w
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">with aloevera</p>
            </div>
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="lg:max-w-[900px] mx-auto mt-6 px-4">
        <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-red-500">
          DESCRIPTION:
        </h3>
        <p className="mt-6 text-slate-600">
          Inthyzol Soap Contains the active ingredients Ketoconazole which is
          medically proven to be effective against P.ovale, the organism which
          most skin specialists agree is the causes of anti-fungal. Considering
          the pharmacological actions of the drugs it can be noted that both act
          two different sites by different mechanisms of actions and has
          synergistic actions. Ketoconazole is the most well studied anti-
          fungal medication making Inthyzol Soap, the scientific answer in the
          treatment of fungal with over a decade of clinical experience. <br />{" "}
          <span>
            <span className="font-bold">Inthyzol Soap :</span> is also unique in
            that its effect is long lasting even after rinsing. It carries on
            working for serveral days..
          </span>
        </p>
        <h3 className="text-2xl mt-6 lg:max-w-[900px] mx-auto font-bold text-[#9c00ea9e]">
          INGREDIENTS :
        </h3>
        <div>
          <h4 className="text-xl mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Ketoconazole:
          </h4>
          <p className="mt-3 text-slate-600">
            Ketoconazole is used to treat infections caused by a fungus or
            yeast. It works by killing the fungus or yeast or preventing its
            growth.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#eb2ea0] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Zinc pyrithione:
          </h4>
          <p className="mt-3 text-slate-600">
            <span className="font-bold">Zinc pyrithione</span> is an
            antibacterial and antifungal agent. It is used as an antifungal,
            primarily as a treatment for dandruff and seborrheic dermatitis. Its
            current antibacterial uses are treating Streptococcus and
            Staphylococcus infections and psoriasis, eczema, ringworm and
            athlete's foot.
          </p>
        </div>
        <div>
          <h4 className="text-xl mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Aloevera :
          </h4>
          <p className="mt-3 text-slate-600">
            - Aloevera helps treat inflammation, wounds and burns. The
            anti-allergic property of aloevera is a useful in the treatment of
            various skin diseases like eczema, psoriasis, itchy skin and so on.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#821a1a] mt-4 lg:max-w-[900px] mx-auto font-semibold">
            DIRECTION OF USE:
          </h4>
          <p className="mt-3 text-slate-600">
            Rub gently produce lather. Allow it for 3-5 minutes and then wash
            throughly.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-red-500 mt-6 lg:max-w-[900px] mx-auto font-semibold">
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
          <h4 className="text-xl text-[#0019bc] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            SUPPLY : 75gm Per PACK.
          </h4>
        </div>
        <div className="mt-6 flex gap-6 flex-wrap ">
          <div className="flex gap-3 items-center">
            <img className="w-5" src={star} alt="point" />
            <p className="text-[17px]  font-bold">
              Store in dry and cool place
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-5" src={star} alt="point" />
            <p className="text-[17px]  font-bold">
              Keep out of reach of children.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-5" src={star} alt="point" />
            <p className="text-[17px]  font-bold">For external use only.</p>
          </div>
        </div>
      </div>
      {/* Image  */}
      <div className="mt-8 px-4 md:px-0">
        <img className="rounded-lg w-full" src={image5} alt="image " />
      </div>
    </div>
  );
};

export default Product3;
