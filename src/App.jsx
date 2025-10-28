import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Contacts } from "./components/Contacts";
import { fleetData, servicesData } from "./components/servicesData";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// After
import {
  Menu,
  X,
  MapPin,
  MoveRight,
  Search,
  Server,
  Bus,
  Car,
  Truck,
} from "lucide-react";
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
            <a
              href="#"
              className="text-3xl font-bold text-white"
              style={{
                fontFamily: "'Dancing Script', cursive",
                textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
              }}
            >
              Fine Way{" "}
              <span
                className="font-cursive mt-2 text-orange-300"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
                }}
              >
                {" "}
                Travels
              </span>
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
            <button className="text-white hover:text-blue-200 ml-4"></button>
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
};
const LayeredHero = ({ backgroundImage, foregroundImage }) => {
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
  const foregroundMoveFactor =
    screenWidth < 640 ? 0.1 : screenWidth < 1024 ? 0.3 : 0.5;
  const textMoveFactorX =
    screenWidth < 640 ? 0.2 : screenWidth < 1024 ? 0.4 : 0.7;
  const ctaMoveFactorX =
    screenWidth < 640 ? 0.1 : screenWidth < 1024 ? 0.3 : 0.5;
  const maxForegroundMove = 150;

  // --- Calculations ---
  const backgroundScale = 1 + scrollY * backgroundZoomFactor;
  const foregroundTranslateY = Math.min(
    scrollY * foregroundMoveFactor,
    maxForegroundMove
  );
  const textTranslateX = scrollY * textMoveFactorX;
  const maxCtaMove = 30; // adjust as needed
  const ctaTranslateXLimited = Math.min(scrollY * ctaMoveFactorX, maxCtaMove);
  return (
    // <section className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] lg:h-[100vh] flex items-center overflow-hidden">
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={
            backgroundImage ||
            "https://placehold.co/1920x1080/374151/e0e7ff?text=Your+Background+Image"
          }
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
          style={{
            zIndex: 1,
            transform: "translate(-50%, -50%)",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight leading-none opacity-80 md:text-left text-center md:text-start"
            style={{
              fontFamily: "'Playfair Display', serif",
              marginTop: "-60px",
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
              textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
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
            <img
              src={foregroundImage}
              alt="Traveller foreground"
              //  className="h-full w-auto object-contain"
              className="h-full w-auto object-contain"
            />
          </div>
        )}

        {/* CTA Button */}
        {/* CTA Button */}
        {/* CTA Button */}
        <div
          className="absolute right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 text-right text-white max-w-xs sm:max-w-sm"
          style={{
            zIndex: 3,
            // Adjust bottom position based on screen width
            bottom:
              screenWidth < 640
                ? "6rem" // small: slightly upward
                : screenWidth < 1024
                ? "7rem" // medium: good balance
                : "3rem", // large screens: push down so it stays below hero text
            transform: `translateX(-${ctaTranslateXLimited}px)`,
            transition: "bottom 0.3s ease-out, transform 0.3s ease-out",
          }}
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
// --- Destinations Section ---

 const DestinationsFlow = () => {
  const destinations = [
    {
      title: "Munnar Hills",
      description: "Lush green hills and tea plantations.",
      image: "./destination3.jpg",  
    },
    {
      title: "Alleppey Houseboats",
      description: "Cruise through the serene backwaters.",
      image: "./destination1.jpg",
    },
    {
      title: "Athirappilly Waterfalls",
      description: "Majestic waterfalls amidst nature.",
      image: "./destination4.jpg",
    },
    {
      title: "Wayanad",
      description: "Misty mountains and wildlife sanctuaries.",
      image: "./destination2.jpg",
    },
    {
      title: "Kumarakom",
      description: "Serene backwaters and scenic resorts.",
      image: "./destination5.jpg",
    },
  ];

  // Step heights create a staircase: up-up-up-up-reset
  const stepHeights = [0, 40, 80, 40, 0]; // increase this for steeper stairs

  return (
    <section
      id="destinations"
      className="relative bg-gradient-to-b from-white to-orange-50 " // taller section
    >
      <div className="px-6 flex flex-col align-center justify-center text-center">
         <span
            className="block text-3xl md:text-4xl text-orange-400 mb-3 mt-6"
            style={{ fontFamily: "Mea Culpa, cursive" }}
          >
            Make it memorable

          </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-black mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Popular Destinations in Kerala
        </h2>

        {/* Flow section */}
        <div className="relative flex overflow-x-auto pb-10 scrollbar-hide ">
          {destinations.map((dest, index) => {
            const offset = stepHeights[index % stepHeights.length];
            return (
              <div
                key={dest.title}
                className="relative flex-shrink-0 w-66 h-96 mx-2 overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-500"
                style={{
                  marginTop: `${offset}px`, // natural step instead of transform
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-0 w-full text-center px-4">
                  <h3 className="text-xl font-bold text-white">{dest.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{dest.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



// --- Services Section ---
const Services = () => (
  <section id="services" className="bg-gray-50">
    <div className="container  pl-15 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Text Section */}
        <div className="flex-1 text-left md:text-start">
          <span
            className="block text-3xl md:text-4xl text-orange-400 mb-2"
            style={{ fontFamily: "Mea Culpa, cursive" }}
          >
            Plan your trip with us
          </span>

          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.5px",
            }}
          >
            We Offer The Best Services
          </h2>

          <p
            className="text-base md:text-lg text-gray-600 max-w-md"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Our premium services are designed to make your travel unforgettable.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-end ">
          <img
            className="w-50 md:w-50 relative z-10 object-contain"
            src="./h5_deco-1.png"
            alt="Decorative graphic"
          />
        </div>
      </div>

      {/* Service Cards */}
      <div className=" flex overflow-x-auto gap-8 pb-4  scrollbar-hide">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="flex-shrink-0 w-72 bg-white p-8 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-200 to-orange-300">
              <img
                src={service.icon}
                alt={service.title}
                className="h-10 w-10 object-contain  sm:h-12 sm:w-12"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Fleet Section ---
// --- Fleet Section ---
// --- Fleet Section (Icon Version) ---

// --- Locations Section ---import { MapPin } from "lucide-react";


// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const branchLocations = [
  {
    name: "Kunnamkulam",
    desc: "Main Office & Headquarters",
    coords: [10.6537, 76.0668],
  },
  {
    name: "Guruvayoor",
    desc: "Pilgrimage and Holiday Assistance",
    coords: [10.5942, 76.0417],
  },
  {
    name: "Pazhanji",
    desc: "Local Service Point",
    coords: [10.6769, 76.0085],
  },
];

const Locations = () => (
  <section id="about" className="py-20 md:py-28 bg-orange-50 ">
    <div className="max-w-7xl px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
      
      {/* --- Text Section --- */}
      <div className="space-y-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Local Travel Partners
        </h2>

        <p
          className="text-lg md:text-xl text-gray-600 max-w-lg"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          We are <span className="font-semibold text-orange-400">Fine Way Travels</span>, 
          proudly serving our community from multiple convenient locations across Kerala.
        </p>

        <div className="space-y-4">
          {branchLocations.map((loc) => (
            <div
              key={loc.name}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <MapPin className="h-6 w-6 text-orange-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {loc.name}
                </h3>
                <p className="text-gray-600 text-sm">{loc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-600 pt-4 max-w-md pb-10">
          Being local means we understand your needs better — from quick trips 
          to lifetime vacation experiences, we’ve got you covered.
        </p>
      </div>

      {/* --- Real Interactive Map --- */}
      <div className="rounded-2xl overflow-hidden shadow-xl border border-orange-100">
        <MapContainer
          center={[10.65, 76.05]} // Centered around Thrissur region
          zoom={11}
          scrollWheelZoom={false}
          className="h-[450px] w-full rounded-2xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {branchLocations.map((loc) => (
            <Marker key={loc.name} position={loc.coords} icon={markerIcon}>
              <Popup>
                <div className="font-semibold text-gray-900">{loc.name}</div>
                <div className="text-gray-600 text-sm">{loc.desc}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
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
      <main className="[&>section]:m-0 [&>section]:p-0">
        <LayeredHero
          backgroundImage={backgroundImage}
          foregroundImage={foregroundImage}
        />
        <Services />
        <DestinationsFlow />

        
        <Locations />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
