import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, MoveRight, Search, Server } from "lucide-react";
import { Footer } from "./components/Footer";
import { Contacts } from "./components/Contacts";
import { fleetData, servicesData } from "./components/servicesData";

// --- Header ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#fleet", label: "Our Fleet" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold text-white"   style={{ fontFamily: "'Dancing Script', cursive", textShadow: "1px 1px 6px rgba(0,0,0,0.5)" }}
          >
              Fine Way <span className="font-cursive mt-2 text-orange-300"   style={{ fontFamily: "'Dancing Script', cursive", textShadow: "1px 1px 6px rgba(0,0,0,0.5)" }}
          >  Travels</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-orange-300 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}  
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white   bg-orange-400  hover:bg-orange-500  transition-colors"
            >
              Book Now
            </a>
            <button className="text-white hover:text-blue-200 ml-4">
            
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-gray-900 bg-opacity-90 shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-gray-700 hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="px-5 pb-5">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-800 bg-white hover:bg-gray-100"
            >
              Book Now
            </a>
            <button className="block w-full text-white text-center mt-3">
              <Search className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};const LayeredHero = ({ backgroundImage, foregroundImage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --- Parallax factors ---
  const backgroundZoomFactor = 0.0002;
  const foregroundMoveFactor = screenWidth < 640 ? 0.1 : screenWidth < 1024 ? 0.3 : 0.5;
  const textMoveFactorX = screenWidth < 640 ? 0.2 : screenWidth < 1024 ? 0.4 : 0.7;
  const ctaMoveFactorX = screenWidth < 640 ? 0.1 : screenWidth < 1024 ? 0.3 : 0.5;
  const maxForegroundMove = 150;

  // --- Calculations ---
  const backgroundScale = 1 + scrollY * backgroundZoomFactor;
  const foregroundTranslateY = Math.min(scrollY * foregroundMoveFactor, maxForegroundMove);
  const textTranslateX = scrollY * textMoveFactorX;
 const maxCtaMove = 30; // adjust as needed
const ctaTranslateXLimited = Math.min(scrollY * ctaMoveFactorX, maxCtaMove);
  return (
    // <section className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] lg:h-[100vh] flex items-center overflow-hidden">
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || "https://placehold.co/1920x1080/374151/e0e7ff?text=Your+Background+Image"}
          alt="Beautiful landscape background"
          // className="w-full object-cover object-center brightness-50 md:h-full sm:h-[80vh] h-[60vh]"
                className="w-full h-full object-cover object-center brightness-50"
          style={{ transform: `scale(${backgroundScale})` }}
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center h-full">
      <div
  className="absolute top-1/2 left-1/2 text-orange-400 font-extrabold w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
  style={{ zIndex: 1, transform: "translate(-50%, -50%)", textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
>
  <h1
    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight leading-none opacity-80 md:text-left text-center md:text-start"
    style={{
      fontFamily: "'Playfair Display', serif",
      marginTop: "-40px",
      transform: `translateX(-${textTranslateX}px)`,
      transition: "transform 0.5s ease-out",
    }}
  >
    Unforgettable
  </h1>

  <p
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cursive mt-2 text-orange-300 text-center"
    style={{
      fontFamily: "'Dancing Script', cursive",
      textShadow: "1px 1px 6px rgba(0,0,0,0.5)"
    }}
  >
    travel
  </p>

  <h2
    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight leading-none mt-4 opacity-80 md:text-right text-center md:text-end"
    style={{
      fontFamily: "'Playfair Display', serif",
      transform: `translateX(${textTranslateX}px)`,
      transition: "transform 0.5s ease-out",
    }}
  >
    Experiences
  </h2>
</div>


        {/* Foreground Image */}
        {foregroundImage && (
          <div
            // className="absolute bottom-0 left-1/2 h-[60%] sm:h-[70%] md:h-[80%] w-auto max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] pointer-events-none"
                className="absolute bottom-0 left-1/2 h-[85vh] w-auto pointer-events-none"
            style={{
              zIndex: 2,
              transform: `translateX(-50%) translateY(${foregroundTranslateY}px)`,
              filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))",
            }}
          >
            <img src={foregroundImage} alt="Traveller foreground"
            //  className="h-full w-auto object-contain"
                  className="h-full w-auto object-contain"
              />
          </div>
        )}

        {/* CTA Button */}
   // --- CTA Button ---
<div
  className="absolute bottom-8 sm:bottom-12 md:bottom-20 right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 text-right text-white max-w-xs sm:max-w-sm"
  style={{ zIndex: 3, transform: `translateX(-${ctaTranslateXLimited}px)` }}
>
  <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
    Find amazing things to do. <br /> Anytime, anywhere.
  </p>
  <a
    href="#services"
    className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-transform hover:scale-105"
  >
    Explore Our Tours
    <MoveRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
  </a>
</div>
      </div>
    </section>
  );
};
// --- Destinations Section ---
// --- Destinations Flow Section with Curvy Thread ---
const DestinationsFlow = () => {
  const destinations = [
    {
      title: "Munnar Hills",
      description: "Lush green hills and tea plantations.",
      image: "https://placehold.co/800x500/fbbf24/ffffff?text=Munnar+Hills",
    },
    {
      title: "Alleppey Houseboats",
      description: "Cruise through the serene backwaters.",
      image: "https://placehold.co/800x500/fbbf24/ffffff?text=Alleppey+Houseboats",
    },
    {
      title: "Athirappilly Waterfalls",
      description: "Majestic waterfalls amidst nature.",
      image: "https://placehold.co/800x500/fbbf24/ffffff?text=Athirappilly+Waterfalls",
    },
  ];

  return (
    <section id="destinations" className="relative py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Popular Destinations in Kerala
        </h2>

        <div className="relative">
          {destinations.map((dest, index) => (
            <div
              key={dest.title}
              className={`relative mb-24 sm:mb-32 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-lg">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full mt-6 md:mt-0 md:px-8 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-3">
                  {dest.title}
                </h3>
                <p className="text-gray-700 text-lg">{dest.description}</p>
              </div>

              {/* Decorative curvy connector line */}
              {index < destinations.length - 1 && (
                <svg
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
                  width="80"
                  height="120"
                  viewBox="0 0 80 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 0 C60 20, 20 60, 40 120"
                    stroke="#FDBA74" // orange-200
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---
const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Elegant Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4"
        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "1px" }}
      >
        We Offer The Best Services
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-12">
        Our premium services are designed to make your travel unforgettable.
      </p>

      {/* Horizontal Scroll Services */}
<div className="flex overflow-x-auto gap-8 py-4 px-4 -mx-4 sm:-mx-6 lg:-mx-8 scrollbar-hide">
        {servicesData.map((service) => (
             <div key={
              service.title
             } className="flex-shrink-0 w-72 flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg border border-orange-200">

            {/* Icon */}
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 text-orange-700 mb-6 transition-all duration-300 group-hover:from-orange-300 group-hover:to-orange-400">
              <service.icon className="h-10 w-10" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);



// --- Fleet Section ---
const Fleet = () => (
  <section id="fleet" className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Travel With Our Modern Fleet
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Comfortable and reliable vehicles for any group size.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {fleetData.map((vehicle) => (
          <div
            key={vehicle.title}
            className="border border-gray-200 bg-gray-50 rounded-xl p-8 text-center shadow-lg"
          >
            <vehicle.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {vehicle.title}
            </h3>
            <div className="text-gray-600 text-lg leading-relaxed">
              {vehicle.desc.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Locations Section ---
const Locations = () => (
  <section id="about" className="py-20 md:py-28 bg-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Your Local Travel Partners
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          We are Fine Way Travels, proudly serving our community from multiple
          locations.
        </p>
        <div className="mt-8 space-y-4">
          {["Kunnamkulam", "Guruvayoor", "Pazhanji"].map((loc) => (
            <div key={loc} className="flex items-center">
              <MapPin className="flex-shrink-0 h-6 w-6 text-blue-600" />
              <span className="ml-3 text-lg font-medium text-gray-700">
                {loc}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-lg text-gray-600">
          Being local means we offer you the best, most reliable service,
          whether it's a local trip or a grand vacation. Trust us to be your
          guide.
        </p>
      </div>
      <div className="mt-10 lg:mt-0">
        <img
          className="w-full rounded-xl shadow-2xl"
          src="https://placehold.co/600x450/a5f3fc/0c4a6e?text=Map+of+Our+Locations"
          alt="Map of Kunnamkulam, Guruvayoor, and Pazhanji"
        />
      </div>
    </div>
  </section>
);

// --- Main App ---
export default function App() {
  const backgroundImage = "./background.jpeg";
  const foregroundImage = "./person.png";

  return (
    <div className="font-inter antialiased text-gray-800">
      <Header />
      <main>
        <LayeredHero
          backgroundImage={backgroundImage}
          foregroundImage={foregroundImage}
        />
        {/* <DestinationsFlow /> */}
        <Services />
        <Fleet />
        <Locations />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
