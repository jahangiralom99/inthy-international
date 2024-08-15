import Contact from "../Shared/Contact/Contact";

const ContactUs = () => {
  return (
    <div>
      <Contact />
      <div className="mt-8 ">
        <div className="w-full rounded-lg bg-gray-50 md:mt-0 sm:max-w-screen-md mx-auto xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" method="POST">
              <div>
                <label className="block  text-sm font-medium ">
                  Your Name :
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white border-b border-black border-dashed sm:text-sm rounded block w-full p-1 focus:outline-none "
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">
                  Your Email :
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border-b border-black border-dashed sm:text-sm rounded block w-full p-1 focus:outline-none"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Subject :</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-white border-b border-black border-dashed sm:text-sm rounded block w-full p-1 focus:outline-none"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">
                  Your Comments :
                </label>
                <textarea
                  className="w-full border-t mt-3 border-black border-dashed"
                  name=""
                  id=""
                  rows={6}
                ></textarea>
              </div>
              <div>
                <button
                  className="px-6 py-2 bg-[#61c5b3] text-white uppercase font-bold hover:bg-[#2e8272]"
                  type="submit"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
