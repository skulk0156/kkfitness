import React from "react";
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  MessageCircle,
  Facebook,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-gray-900 pt-16 px-4 flex flex-col justify-center items-center" id="contact">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-[400px]"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=KK fitness best gym pune&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="KK Fitness Location"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">
            JOIN US NOW
          </h2>
          <p className="text-gray-600 mb-6">
            Visit us today and get a personalized fitness plan that fits your
            lifestyle. Connect via phone, mail or Instagram.
          </p>

          <div className="flex items-center space-x-2 mb-4">
            <Phone className="text-gray-700 size-5 md:size-4" />
            <span className="text-gray-800 font-medium">
              <a href="tel:9763423955">9763423955</a> /{" "}
              <a href="tel:9359255466">9359255466</a>
            </span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <Mail className="text-gray-700 size-5 md:size-4" />
            <a
              href="mailto:kkfitnessgym2020@gmail.com"
              className="text-gray-800 font-medium"
            >
              kkfitnessgym2020@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <Instagram className="text-gray-700 size-5 md:size-4" />
            <a
              href="https://www.instagram.com/kkfitness_ravet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium"
            >
              kkfitness_ravet
            </a>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="text-gray-700 size-8 md:size-4" />
            <p className="text-gray-800 font-medium text-sm md:text-base">
              Anand Plaza, 1st floor, DY Patil College Road, Ravet, Pune
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-6">
            <a
              href="https://wa.me/919763423955"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="text-gray-600 hover:text-green-600" />
            </a>
            <a
              href="https://www.instagram.com/kkfitness_ravet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-gray-600 hover:text-pink-600" />
            </a>
          </div>
        </div>
      </div>
      <footer className="w-full text-center mt-10 pb-6 *:text-white">
        <p className="text-white text-normal mb-2" style={{fontFamily:"math"}}>Powered by Word Lane Tech</p>
        <p className="text-white text-normal opacity-90" style={{fontFamily:"math"}}>© KK Fitness. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
