import React, { useState } from "react";
import ninBg from "../assets/Images/nin_bg.png";
import powermall from "../assets/Images/Logo_powermall.png";
import nintendoload from "../assets/Images/Nintendo_load.gif";
import EN from "../assets/Images/EN.png";
import TH from "../assets/Images/TH.png";
import { useNavigate } from "react-router-dom";


const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

 const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLoading(true);

    setTimeout(() => {
      navigate("/consent");
    }, 1000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ninBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex flex-col  mx-auto px-6 items-center justify-center relative"
    >
      {/* Overlay สีแดง */}
      <div className="absolute w-full h-full inset-0 opacity-80 "></div>

      {/* Content */}
      <div className="relative bg-white rounded-lg p-8 shadow-2xl max-w-md w-full mx-4 z-10">
        {/* Logo */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <img src={powermall} alt="Logo" className="w-auto h-15" />
          </div>
          <div className="flex w-full mt-5 mb-5">
            <div className="flex-1 border-t-2 border-red-500"></div>
            <div className="flex-1 border-t-2 border-gray-400"></div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-6">
            Choose your language
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* English Option */}
            <button
              onClick={() => handleLanguageSelect("en")}
              className={`p-4 border-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                selectedLanguage === "en"
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-6 rounded overflow-hidden border-gray-300">
                  <img src={EN} alt="Logo" className="w-auto h-15" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  English / US
                </span>
              </div>
            </button>

            {/* Thai Option */}
            <button
              onClick={() => handleLanguageSelect("th")}
              className={`p-4 border-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                selectedLanguage === "th"
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-15 h-6 rounded overflow-hidden border-gray-300">
                  <img src={TH} alt="Logo" />
                </div>
                <span className="text-sm font-bold text-gray-700">
                  ไทย / ภาษาไทย
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer ข้อความ อยู่ข้างนอกชิดติดกล่อง content */}
      <div className="text-xs text-white opacity-75 mt-5">
        Hand Raiser Round
      </div>

 {/* Loading overlay */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <img src={nintendoload} alt="loading" className="" />
        </div>
      )}

    </div>
  );
};

export default LanguageSelector;
