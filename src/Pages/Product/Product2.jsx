/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/2-1.png";
import image2 from "../../assets/1-1.png";
import image4 from "../../assets/3-1.png";
import point from "../../assets/point.png";
import star from "../../assets/star.png";
import image5 from "../../assets/4-2.jpg";

const Product2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-6 bg-[#f6f9ea] rounded-lg">
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
        <div className="flex flex-col items-center gap-6">
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
        <div className="hidden md:block">
          <img
            className="md:w-60 rounded-lg"
            src={image4}
            alt="product image"
          />
        </div>
      </div>
      {/* text section */}
      <div className="">
        <h2 className="text-center text-2xl font-semibold text-[#ed7e00]">
          Complete cure with potent power in antifungals
        </h2>
        {/* INDICATIONS text  */}
        <div className="flex flex-col lg:max-w-[900px] mx-auto mt-8 gap-4">
          <h3 className="text-2xl font-bold text-red-500">HIGHLY EFFECTIVE IN :</h3>
          {/* icon and text */}
          <div className="space-y-5 px-4">
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Tinea Cruris</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold"> Tinea Versicolo</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Tinea Pedis</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Tinea Manuum</p>
            </div>
          
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Tinea Circinata</p>
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
              <p className="text-[17px]  font-bold">INTHYZOL CREAM INTHYZOL CREAM- Luliconazole is an Antifungal Medication The Fights.</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Infections caused by fungus.</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Luliconazole is used and adults to treat </p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Athlete's Foot (tinea pedis)Jock itch (Tinea Cruris) and Ringworm (Tinea Corporis)</p>
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
      <div className="lg:max-w-[900px] mx-auto mt-12">
        <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-[#00aeef]">
          Tinea pedis:
        </h3>
        <p className="mt-3 text-slate-600">
          warm humid conditions and is most common in young adult men. Tinea
          pedis is most frequently due to:
        </p>
        <div className="mt-4 flex gap-5 flex-wrap">
          <div className="flex gap-6 items-center">
            <img className="w-4" src={star} alt="point" />
            <p className="text-[16px]  font-bold">Trichophyton (T.) rubrum</p>
          </div>
          <div className="flex gap-6 items-center">
            <img className="w-4" src={star} alt="point" />
            <p className="text-[16px]  font-bold">
              T. interdigitale, previously called T. mentagrophytes var.
              interdigitale
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <img className="w-4" src={star} alt="point" />
            <p className="text-[16px]  font-bold">Epidermophyton floccosum</p>
          </div>
        </div>
        <div>
          <h4 className="text-2xl mt-12 lg:max-w-[900px] text-[#702b91] mx-auto font-bold">
            Other classic features of tinea Corporis include:
          </h4>
          <p className="mt-3 text-slate-600">
            1) The edge of the rash appears elevated and is scaly to touch.
          </p>
          <p className="mt-3 text-slate-600">
            2) Sometimes the skin surroundings the rash may be dry and flaky.
          </p>
          <p className="mt-3 text-slate-600">
            3) Almost invariable, there will be hair loss in areas of the
            infection.
          </p>
        </div>
        <div>
          <h4 className="text-2xl mt-12 lg:max-w-[900px] text-[#ed2d9b] mx-auto font-bold">
            Tinea Versicolor:
          </h4>
          <p className="mt-3 text-slate-600">
            Is a condition characterized by a rash on the trunk and proximal
            extremities.Recent research has shown that the majority of tinea
            versicolor is caused by the malassezia glavrosa fungus, although
            malassezia furfur is responsible for a small number of cases. These
            yeasts are normally found on the human skin and only become
            troublesome under certain circumstances, such as a warm and humid
            environment, although the exact conditions that cause initiation of
            the disease process are poorly understood.
          </p>
        </div>

        <div>
          <h4 className="text-xl text-[#821a1a] mt-12 lg:max-w-[900px] mx-auto font-semibold">
            DIRECTION OF USE
          </h4>
          <p className="mt-3 text-slate-600">
            Should be applied at least 30 minutes before bed time. Apply a thin
            film of the cream to the fungal infarction area of malasma including
            about 1/2 inch of normal Appearing skin surroundings is leasure rub
            lighty and uniformally into the skin, or direction by physician
          </p>
        </div>
        {/* <div>
          <h4 className="text-xl text-red-500 mt-12 lg:max-w-[900px] mx-auto font-semibold">
            WARNINIGS
          </h4>
          <p className="mt-3 text-slate-600">
            A skin whitening soap works by removing melanin from your skin’s
            epidermal layer, making it look white and fairer then other areas on
            the body. Furthermore, this type of soap Works by removing the dead
            calls on your face or body and giving it a fresh look.
          </p>
        </div> */}
        <div>
          <h4 className="text-xl text-[#0019bc] mt-12 lg:max-w-[900px] mx-auto font-semibold">
            SUPPLY : 30gm per tube.
          </h4>
          <p className="mt-3 text-slate-600">
            ..avoids incomplete therapy and reduces risk of recurrence Fight
            with potent power in antifungals with optimal pack size of 30 gm
          </p>
        </div>
      </div>
      {/* Image  */}
      <div className="mt-8">
        <img className="rounded-lg" src={image5} alt="image " />
      </div>
    </div>
  );
};

export default Product2;
