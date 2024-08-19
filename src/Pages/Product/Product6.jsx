/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/Screenshot_2024-08-19_134643-removebg-preview.png";
import image2 from "../../assets/Screenshot_2024-08-19_134623-removebg-preview.png";
import image4 from "../../assets/Screenshot_2024-08-19_134705-removebg-preview.png";
import point from "../../assets/point.png";
// import star from "../../assets/star.png";
import image5 from "../../assets/Screenshot 2024-08-17 171531.png";

const Product6 = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-6 shadow-lg bg-white rounded-lg">
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
          {/* <div className="flex gap-3 items-center">
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
        <h2 className="text-center text-2xl font-semibold text-[#ed7e00]">
          Glow & Shine Skin Lightening For All skin Types
        </h2>
        {/* INDICATIONS text  */}
        <div className="flex flex-col lg:max-w-[900px] mx-auto mt-8 gap-4">
          <h3 className="text-2xl font-bold text-[#2e3092]">BENEFITS :</h3>
          {/* icon and text */}
          <div className="space-y-5 px-4">
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Dark circles</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Freckles</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold"> Anti-Aging</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Melasma</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Age spot</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Rejuvenation</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">Brightening & Lightening</p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Inhibits Melanin Production
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Repair & Help improve the dull
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Brighter, Clear complexion & Even skin tone
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Reduces pigmentation, dark spots & acne spots
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img className="w-6" src={point} alt="point" />
              <p className="text-[17px]  font-bold">
                Out looking black problem, Hyper-pigmentation spots.
              </p>
            </div>
          </div>
        </div>
        {/* Image For mobile phone  */}
        <div className="mt-8 md:hidden">
          <img className="rounded-lg w-full" src={image4} alt="" />
        </div>

        {/* COMPOSITION */}
        {/* <div className="mt-14">
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
        </div> */}
      </div>
      {/* DESCRIPTION */}
      <div className="lg:max-w-[900px] mx-auto mt-8 px-4">
        <h3 className="text-2xl lg:max-w-[900px] mx-auto font-bold text-[#00a54f]">
          DESCRIPTION :
        </h3>
        <p className="mt-3 text-slate-600">
          INTHIGLOW Face Wash Reduces Blemishes & Lightens Skin-tone On Regular
          Use, With Its Moisturizing Foam Cleanses & Improves Skin Complexion &
          Tone. Regular Use Of INTHIGLOW Face Wash Will Help To Achieve Desired
          Skin Complexion.
        </p>
        <h3 className="text-2xl mt-8 lg:max-w-[900px] mx-auto font-bold text-[#ed028c]">
          INGREDIENTS:
        </h3>
        <p className="mt-3 text-slate-600 font-bold">
          Aqua, Kojic Acid Dipalmitate, Arbutin, Glutathion, Vitamin C, Sodium
          Lauryl Ether Sulphate, Cocoamido Propyl Betain, Propylene Glycol,
          Ethylene Glycol Mono Stearate, Liquorice Ext., Niacinamide, Glycolic
          Acid, Triclosan, D-panthenol, Acrylate Co-polymer, Sodium Gluconate,
          Methylchloroisothiazolinone And Methylisothiazolinone, Fragrance.
        </p>
        <div>
          <h4 className="text-xl text-[#ee1d23] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Kojic Acid Dipalmitate:
          </h4>
          <p className="mt-3 text-slate-600">
            By inhibiting tyrosinase activity, Kojic Acid Dipalmitate is capable
            of suppressing skin pigmentation. Its ability to suppress melanin
            formation makes it effective in whitening dark skin, or areas of
            dark skin.
          </p>
        </div>
        <div>
          <h4 className="text-xl mt-6 text-[#303293] lg:max-w-[900px] mx-auto font-semibold">
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
          <h4 className="text-xl text-[#822890] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            L-glutathione:
          </h4>
          <p className="mt-3 text-slate-600">
            Glutathione plays a significant role in keeping skin healthy and
            young. It not only acts as an astonishing skin-brightening agent but
            is also known to reduce wrinkles, fine lines and improve skin
            elasticity. All these attributes of glutathione are due to its
            amazing skin- protecting properties.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-[#2e3092] mt-6 lg:max-w-[900px] mx-auto font-semibold">
            Glycolic acid:
          </h4>
          <p className="mt-3 text-slate-600">
            Glycolic acid is a substance that chemically exfoliates the skin by
            dissolving dead skin cells and oils. It may also help boost collagen
            production, and support skin moisture. <br />
            D-Panthenol is known for its hydrating property, which helps to keep
            your skin moisturized and well-nourished. Another good thing about
            D- Panthenol is that it prevents the trans-epidermal loss of water
            from the surface of the skin due to evaporation. D-Panthenol adds
            nourishment and moisturization to your skin and makes your skin
            soft, supple and plump, decreasing fine lines and wrinkles.
          </p>
        </div>
        <div>
          <h4 className="text-xl text-red-500 mt-6 lg:max-w-[900px] mx-auto font-semibold">
            DIRECTION OF USE:
          </h4>
          <p className="mt-3 text-slate-600">
            Take little INTHIGLOW Facewash with sufficient water on to your palm
            workup lather & gentlymassage on your wet face & neck with circular
            motion. Rinse off with water and pat dry. For bestresults use twice
            or thrice a day regularly.
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
            SUPPLY : 60ml per tube.
          </h4>
        </div>
      </div>
      {/* Image  */}
      <div className="mt-8 px-4 md:px-0">
        <img className="rounded-lg w-full" src={image5} alt="image " />
      </div>
    </div>
  );
};

export default Product6;
