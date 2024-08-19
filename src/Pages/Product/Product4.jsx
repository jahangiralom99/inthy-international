import image1 from "../../assets/Screenshot_2024-08-19_131927-removebg-preview.png";
import image2 from "../../assets/Screenshot_2024-08-19_131909-removebg-preview.png";
import image4 from "../../assets/Screenshot_2024-08-19_131943-removebg-preview.png";
import point from "../../assets/point.png";
import star from "../../assets/star.png";
import image5 from "../../assets/Screenshot 2024-08-17 150437.png";

const Product4 = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 bg-[#fce2ee] rounded-lg">
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
        {/* <h2 className="text-center text-2xl font-semibold text-[#ed7e00]">
          Water Resistant & Oil Free Micronized Sunscreen Aqua Gel
        </h2> */}
        {/* INDICATIONS text  */}
        <div className="flex flex-col lg:max-w-[900px] mx-auto mt-8 gap-4">
          <h3 className="text-2xl font-bold text-red-500">TREATMENT FOR:</h3>
          {/* icon and text */}
          <div className="space-y-5 px-4">
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Dandruff (Pityriasis capitis)
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Itching & Oily scalp</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">All allergic condition</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Tinea capitis</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Pityrosporal versicolor</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Prevents Hair loss</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Strengthens and thickens hair
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Blepharitis</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Cradle cap</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Eczema and Seborrhoeic Dermatitis
              </p>
            </div>
          </div>
        </div>
        {/* Image For mobile phone  */}
        <div className="mt-8 md:hidden">
          <img className="rounded-lg" src={image4} alt="" />
        </div>

        {/* COMPOSITION */}
        <div className="mt-8 lg:ml-6">
          <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-[#9c00ea] ">
            COMPOSITION:
          </h3>
          <div className="mt-5 text-[#00a54f] lg:max-w-[900px] mx-auto flex flex-wrap gap-8 items-center ">
            <div className="flex gap-6 items-center ">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px] font-bold">
                Ketoconazole ..............................00%w/v
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">
                Zinc Pyrithione (ZPTO)..............100%w/v
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">
                Shampoo Base ..............Q.S.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">with Biotin & aloevera</p>
            </div>
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="lg:max-w-[900px] mx-auto mt-8 px-4">
        {/* <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-red-500">
          DESCRIPTION:
        </h3>
        <p className="mt-3 text-slate-600">
          Inthyzol Soap Contains the active ingredients Ketoconazole which is
          medically proven to be effective against P.ovale, the organism which
          most skin specialists agree is the causes of anti-fungal. Considering
          the pharmacological actions of the drugs it can be noted that both act
          two different sites by different mechanisms of actions and has
          synergistic actions. Ketoconazole is the most well studied anti-
          fungal medication making Inthyzol Soap, the scientific answer in the
          treatment of fungal with over a decade of clinical experience. <br />{" "}
          <br />
          <span>
            <span className="font-bold">Inthyzol Soap :</span> is also unique in
            that its effect is long lasting even after rinsing. It carries on
            working for serveral days..
          </span>
        </p> */}
        <h3 className="text-2xl mt-8 lg:max-w-[900px] mx-auto font-bold text-[#ed028c]">
          INGREDIENTS :
        </h3>
        <div>
          <h4 className="text-xl mt-6 text-[#2e3092] lg:max-w-[900px] mx-auto font-semibold">
            Ketoconazole:
          </h4>
          <p className="mt-3 text-slate-600">
            It is an azolo antifungal that works by preventing the growth of
            fungus longer duration of action after the soap is washed out.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#00a54f] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Zinc pyrithione:
          </h4>
          <p className="mt-3 text-slate-600">
            It has antifungal anti bacterial and antimicrobial properties that
            can help seborrhoeic dermatitis, scalp psoriasis and acne. It can
            inhibit the growth of yeast which is the main factor in dandruff.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#ed028c] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Aloe vera :
          </h4>
          <p className="mt-3 text-slate-600">
            Aloe vera helps treat inflammation, wounds and burns. The
            anti-allergic property of aloe vera is a useful in the treatment of
            various skin diseases like eczema, psoriasis, itchy skin and so on.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#2e3092] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Biotin :
          </h4>
          <p className="mt-3 text-slate-600">
            Biotin Stimulates keratin production in hair and Increases the rate
            of follicle growth
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#00a54f] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            DIRECTION OF USE:
          </h4>
          <p className="mt-3 text-slate-600">
            Inthyzol shampoo should be used two (2) times in every week for
            consecutive 2-4 weeks. To prevent dandruff further back its should
            use again another 1-2 weeks (once/week)
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
          <h4 className="text-xl text-[#0019bc] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            SUPPLY : 100 ml per bottle.
          </h4>
        </div>
      </div>
      {/* Image  */}
      <div className="mt-8">
        <img className="rounded-lg w-full" src={image5} alt="image " />
      </div>
    </div>
  );
};

export default Product4;
