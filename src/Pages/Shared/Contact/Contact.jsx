/* eslint-disable react/no-unknown-property */

import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-3 max-w-screen-xl mx-auto px-4">
      <iframe
        className="w-full h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5615430464973!2d90.3586319248461!3d23.763009988293057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c19be80d3f95%3A0x7aa89c0537e6dd47!2s17%2F11%2CBlock%20C%2CTajmahal%20road%2CMohammadpur%2CDhaka!5e0!3m2!1sen!2sbd!4v1724072433624!5m2!1sen!2sbd"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="mt-6 flex flex-col items-center gap-4 justify-center font-bold">
        <p>Address: 7/16 Block -C, Tajmohol Road, Mohammadpur, Dhaka -1207</p>
        {/* <p>Area: Dhaka</p> */}
        <p>City: Dhaka</p>
        {/* <p>Postal Code: 1000</p> */}
        <p>Country: Bangladesh</p>
        <p>Phone:01925921227, 01675957881</p>
        <p>md.humayunkabir282@yahoo.com</p>
        <p>info@InthyInternational.com</p>
        <div>
          <FaFacebookF className="text-white bg-[#3c5b99] hover:bg-[#f97c00] hover:text-white text-4xl p-2 rounded-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
