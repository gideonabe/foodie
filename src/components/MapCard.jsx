import React from 'react';
import { MdLocationPin } from "react-icons/md";

const MapCard = () => {
  return (
    <section className="w-full max-w-[95%] mx-auto px-4 md:px-0 my-10">
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
        {/* Google Maps Embed */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.062707494519!2d-0.0899624!3d51.5049175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760353900aa2c3%3A0x9a4ed70a8477986a!2sTooley%20St%2C%20London%20SE1%202TF%2C%20UK!5e0!3m2!1sen!2sng!4v1629022472875!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Info Card Overlay */}
        <div className="hidden md:block absolute top-16 left-16 bg-[#03081F] text-white px-8 py-14  rounded-xl w-[300px] md:w-[320px] shadow-lg z-10">
          <h2 className="text-xl font-bold">McDonald's</h2>
          <h3 className="text-[#F6A623] text-lg font-semibold mb-2">South London</h3>
          <p className="text-sm leading-6 mb-4">
            Tooley St, London Bridge, London SE1 2TF,<br />United Kingdom
          </p>
          <p className="text-sm font-semibold mb-1">Phone number</p>
          <p className="text-[#F6A623] text-sm mb-3">+934443-43</p>
          <p className="text-sm font-semibold mb-1">Website</p>
          <a
            href="http://mcdonalds.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-[#F6A623] hover:underline break-words text-sm"
          >
            http://mcdonalds.uk/
          </a>
        </div>

        {/* Custom Marker Tooltip (static mimic) */}
        <div className="absolute top-[52%] right-[18%] translate-y-[-50%] bg-white px-6 pr-9 py-2 rounded-xl shadow-md flex items-center gap-2 z-10">
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#03081F] rounded-full flex items-center justify-center text-white text-sm font-bold">
            <MdLocationPin size={25} color='#FC8A06'/>
          </div>
          <div className="text-sm font-semibold text-[#03081F] leading-tight">
            <p>McDonald's</p>
            <p className="text-xs font-normal text-gray-500">South London</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapCard;
