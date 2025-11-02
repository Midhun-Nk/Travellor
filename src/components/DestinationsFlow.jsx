import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DestinationsFlow = () => {
  const scrollRef = useRef(null);

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

  const stepHeights = [0, 40, 80, 40, 0];

  // Scroll button handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      id="destinations"
      className="relative mx-auto bg-gradient-to-b from-white to-orange-50  overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <span
          className="px-6 block text-3xl md:text-4xl text-orange-400 mb-3 mt-6"
          style={{ fontFamily: "Mea Culpa, cursive" }}
        >
          Make it memorable
        </span>

        <h2
          className="text-4xl md:text-5xl font-extrabold text-black mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Popular Destinations in Kerala
        </h2>

        {/* Scrollable Flow Section */}
        <div className="relative w-full ">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="md:hidden lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition hidden sm:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="relative flex overflow-x-auto gap-2 pb-6 px-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {destinations.map((dest, index) => {
              const offset = stepHeights[index % stepHeights.length];
              return (
                <div
                  key={dest.title}
                  className="relative flex-shrink-0 snap-start w-64 sm:w-72 h-96 mx-auto overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                  style={{
                    marginTop: `${offset}px`,
                  }}
                >
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-0 w-full text-center px-4">
                    <h3 className="text-xl font-bold text-white">
                      {dest.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {dest.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="md:hidden lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition hidden sm:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="text-sm text-gray-400 mt-6 md:hidden animate-pulse">
          ← Swipe to explore destinations →
        </p>
      </div>
    </section>
  );
};

export default DestinationsFlow;
