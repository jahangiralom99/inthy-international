/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/Screenshot_2024-08-19_133822-removebg-preview.png";
import image2 from "../../assets/Screenshot_2024-08-19_133443-removebg-preview.png";
import image4 from "../../assets/Screenshot_2024-08-19_133800-removebg-preview.png";
import point from "../../assets/point.png";
import star from "../../assets/star.png";
import image5 from "../../assets/Screenshot 2024-08-17 161949.png";


const Product5 = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 bg-[#ebf2e6] rounded-lg">
      {/* <h1 className="text-2xl font-bold">Product</h1> */}
      {/* Image section  */}
      <div className="flex flex-col md:flex-row gap-6 pt-12 justify-between p-8">
        <div>
          <img
            className="md:w-60 w-full rounded-lg"
            src={image1}
            alt="product image"
          />
        </div>
        <div className="flex flex-col items-center  gap-6">
          <img className="rounded-lg" src={image2} alt="product image" />
          <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-xl font-bold">Arbutin</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-xl font-bold">Licorice</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-xl font-bold">Glutathion</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-xl font-bold">Kojic Acid</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-6" src={star} alt="point" />
            <p className="text-xl font-bold">Pisum Sativum</p>
          </div>
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
        <h2 className="text-center text-2xl font-semibold text-[#ed7e00]">
          Paraben Free For All Skin Type
        </h2>
        {/* INDICATIONS text  */}
        <div className="flex flex-col lg:max-w-[900px] mx-auto mt-6 gap-4">
          <h3 className="text-2xl font-bold text-[#2e3092]">BENEFIT :</h3>
          {/* icon and text */}
          <div className="space-y-5 px-4">
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Reducing the melanin production.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">More radiant complexion.</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                {" "}
                Moisturizing, Smoothening and whitening.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Nourishes the skin by hydrating and locking in moisture.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Control acne formation.</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Help reduce fine lines and wrinkles, and optimize skin texture.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Protect Skin From Dryness, maintain Moisture Level,repair Skin,
                lighten Spots, improve Uneven Skin Tone.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Best for the use in hyper-pigmentation skin conditions including
                brown spots.
              </p>
            </div>
          </div>
        </div>
        {/* Image For mobile phone  */}
        <div className="mt-6 md:hidden">
          <img className="rounded-lg w-full" src={image4} alt="" />
        </div>

        {/* COMPOSITION */}
        <div className="mt-6 md:ml-6">
          <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-[#00a54f]">
            INDICATIONS :
          </h3>
          <div className="mt-5 lg:max-w-[900px] mx-auto flex flex-wrap gap-8 items-center ">
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Melasma</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">4x whitening Action</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Arbutin</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Acne black spot</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Brightening & Lightening</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">Anti-Aging</p>
            </div>
            <div className="flex gap-6 items-center">
              <img className="w-5" src={star} alt="point" />
              <p className="text-[17px]  font-bold">
                Out looking black problem, Hyper-pigmentation spots.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="lg:max-w-[900px] mx-auto mt-6 px-4">
        {/* <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-[#9c00ea]">
          DESCRIPTION
        </h3>
        <p className="mt-3 text-slate-600">
          A skin whitening soap works by removing melanin from your skin’s
          epidermal layer, making it look white and fairer then other areas on
          the body. Furthermore, this type of soap Works by removing the dead
          calls on your face or body and giving it a fresh look.
        </p> */}
        <h3 className="text-2xl mt-6 lg:max-w-[900px] mx-auto font-bold text-[#982e33]">
          INGREDIENTS:
        </h3>
        <p className="mt-3 text-slate-600">
          Aqua, Stearic Acid, Cetyl Alcohol, Carbomer, Glycerin, Propylene
          Glycol, Triethanolamine, Kojic Acid Dipalmitate, Arbutin, Licorice
          Extract, Mulberry Extract, Lactic Acid, Vitamin C, Niacinamide,
          L-Glutathione, Actiwhite Water and Glycerin (and) Surcose Dilaurate
          (and) Polysorbate 20 (and) Pisum sativum (Pea) Extract), DMDM
          Hydantoin, EDTA, Fragrance.
        </p>
        <div>
          <h4 className="text-xl text-[#702b91] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Kojic Acid Dipalmitate:
          </h4>
          <p className="mt-3 text-slate-600">
            Kojic acid dipalmitate: By inhibiting tyrosinase activity, Kojic
            Acid Dipalmitate is capable of suppressing skin pigmentation. Its
            ability to suppress melanin formation makes it effective in
            whitening dark skin, or areas of dark skin.
          </p>
        </div>
        <div>
          <h4 className="text-xl mt-6 text-red-500 lg:max-w-[900px] mx-auto font-semibold">
            Arbutin:
          </h4>
          <p className="mt-3 text-slate-600">
            Arbutin is a skin-brightening ingredient that targets dark spots,
            hyperpigmentation, and scars. While it is less potent compared to
            hydroquinone, it has a stronger safety profile.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#00a54f] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Licorise extract:
          </h4>
          <p className="mt-3 text-slate-600">
            Arbutin is a skin-brightening ingredient that targets dark spots,
            hyperpigmentation, and scars. While it is less potent compared to
            hydroquinone, it has a stronger safety profile with fewer risks of
            side effects.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#313293] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Mulberry extract:
          </h4>
          <p className="mt-3 text-slate-600">
            Lightens dark spots and skin discolouration. Improves the appearance
            of uneven skin tones. Helps to protect the skin from environmental
            factors. Moisturizes and nourishes the skin. Reduces signs of
            premature ageing. Creates a lovely, radiant and glowing complexion.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#ed1494] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Vitamin C
          </h4>
          <p className="mt-3 text-slate-600">
            Vitamin C serum has many health benefits for your skin, including
            promoting collagen production and protecting against sun damage.
            It's helpful in lower dark pigmentation of the skin. Provides skin
            hydration also.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#313293] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            L-glutathione:
          </h4>
          <p className="mt-3 text-slate-600">
            Glutathione plays a significant role in keeping skin healthy and
            young. It not only acts as an astonishing skin- brightening agent
            but is also known to reduce wrinkles, fine lines and improve skin
            elasticity. All these attributes of glutathione are due to its
            amazing skin-protecting properties. Actiwhite Cream supports
            lightening, Brightening & Extra glowing effect naturally by gently
            penetrating the skin's surface. Natural ingredients work to sooth
            and moisturize skin and support lightening.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-red-500 mt-6 lg:max-w-[900px] mx-auto font-semibold">
          DIRECTION OF USE: 
          </h4>
          <p className="mt-3 text-slate-600">
          After cleansing and toning, apply proper amount to palm and gently pat until absorbed. Apply twice a day all over the face and neck area in the morning and night or as directed by the physician. [For External use only]
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
          <h4 className="text-xl text-[#9c2f35] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            SUPPLY : 20gm per tube.
          </h4>
        </div>
      </div>
      {/* Image  */}
      <div className="mt-6 px-4 md:px-0">
        <img className="rounded-lg" src={image5} alt="image " />
      </div>
    </div>
  );
};

export default Product5;
