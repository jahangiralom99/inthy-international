/* eslint-disable react/no-unknown-property */

import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-4">
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3478751885477!2d90.41181457484524!3d23.734971089369452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b99cdfee627d%3A0xe46538a33f60366a!2sKashphia%20Plaza!5e0!3m2!1sen!2sbd!4v1723633886488!5m2!1sen!2sbd"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="mt-6 flex flex-col items-center gap-4 justify-center font-bold">
        <p>Address: Kashfia Plaza 35/C (3rd Floor),V.I.P Road</p>
        <p>Area: Nayapaltan</p>
        <p>City: Dhaka</p>
        <p>Postal Code: 1000</p>
        <p>Country: Bangladesh</p>
        <p>Phone:+8801793000277,02-222224344</p>
        <p>Email: g.m.tradeint2012@gmail.com</p>
        <p>info@gmtradeinternational.com</p>
        <div>
          <FaFacebookF className="text-white bg-[#3c5b99] hover:bg-[#f97c00] hover:text-white text-4xl p-2 rounded-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
