function AttractionDetail({ place, onClose }) {
  const placeName = place.name;
  const placeDesc = place.description;

  const info = {
    subtitle: "ONE OF UDAIPUR'S MOST POPULAR TOURIST ATTRACTIONS",
    howToReach: `One can visit ${place.name} from anywhere in the city by tonga (horse-drawn carriage), auto-rickshaws, or by hiring a taxi.`,
    wishToVisit: `I WISH TO VISIT ${place.name.toUpperCase()}`,
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FBF7E6] overflow-y-auto">
      {/* hero */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img src={place.image} alt={placeName} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>

        <button onClick={onClose} className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 transition-colors z-10">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] mb-2" style={{ fontFamily: 'serif' }}>{placeName.toUpperCase()}</h1>
          <p className="text-xl md:text-2xl tracking-[0.2em] font-light" style={{ fontFamily: 'serif' }}>UDAIPUR</p>
        </div>
      </div>

      {/* content */}
      <div className="bg-[#FBF7E6] px-6 md:px-20 py-12">
        <p className="text-sm text-gray-600 mb-8">
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={onClose}>Home</span>
          {" > "}
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={onClose}>Tourist Destinations</span>
          {" > "}
          <span className="font-semibold text-black">{placeName}</span>
        </p>

        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-orange-500 text-xl">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest text-center">{placeName.toUpperCase()}</h2>
          <span className="text-orange-500 text-xl">✦</span>
        </div>

        <p className="text-center text-sm md:text-base tracking-[0.2em] text-gray-700 mb-10 font-medium">{info.subtitle}</p>

        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-gray-800 leading-8 text-justify text-base md:text-lg">{placeDesc}</p>
        </div>

        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="mx-6">
            <svg className="w-16 h-16 text-gray-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
              <circle cx="50" cy="50" r="8" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-serif tracking-[0.15em] mb-6">HOW TO REACH HERE</h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">{info.howToReach}</p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-serif tracking-[0.1em] mb-8">{info.wishToVisit}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors">GET DIRECTIONS</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors">BOOK A TOUR</button>
            <button onClick={onClose} className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors">BACK TO PLACES</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-orange-500 text-3xl mb-3">🕐</div>
            <h4 className="font-medium text-gray-800 mb-2">Timings</h4>
            <p className="text-gray-600 text-sm">6:00 AM - 6:00 PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-orange-500 text-3xl mb-3">🎫</div>
            <h4 className="font-medium text-gray-800 mb-2">Entry Fee</h4>
            <p className="text-gray-600 text-sm">₹50 (Indians) / ₹200 (Foreigners)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-orange-500 text-3xl mb-3">📅</div>
            <h4 className="font-medium text-gray-800 mb-2">Best Time</h4>
            <p className="text-gray-600 text-sm">October to March</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttractionDetail;
