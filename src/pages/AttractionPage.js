import { useParams, Link } from "react-router-dom";
import { usePlaces } from "../context/PlacesContext";

function AttractionPage() {
  const { id } = useParams();
  const { places, loading, error } = usePlaces();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBF7E6] flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FBF7E6] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">Go Back Home</Link>
        </div>
      </div>
    );
  }

  // find place by id
  const place = places.find(p => p.id === parseInt(id));

  if (!place) {
    return (
      <div className="min-h-screen bg-[#FBF7E6] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Attraction not found</h2>
          <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">Go Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF7E6] min-h-screen">
      {/* hero */}
      <div className="relative h-80 md:h-[85vh]">
        <img src={place.image} alt={place.name} loading="lazy" className="w-full h-full object-cover" style={{ imageRendering: 'high-quality' }} />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col top-10 text-center text-white">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] mb-2" style={{ fontFamily: 'serif' }}>{place.name.toUpperCase()}</h1>
          <p className="text-xl md:text-2xl tracking-[0.2em] font-light" style={{ fontFamily: 'serif' }}>UDAIPUR</p>
        </div>
      </div>

      {/* content */}
      <div className="px-6 md:px-20 py-12">
        {/* breadcrumb */}
        <p className="text-sm text-gray-600 mb-8">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          {" > "}
          <Link to="/" className="text-blue-600 hover:underline">Tourist Destinations</Link>
          {" > "}
          <span className="font-semibold text-black">{place.name}</span>
        </p>

        {/* title */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-orange-500 text-xl">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif tracking-widest text-center">{place.name.toUpperCase()}</h2>
          <span className="text-orange-500 text-xl">✦</span>
        </div>

        <p className="text-center text-sm md:text-base tracking-[0.2em] text-gray-700 mb-10 font-medium">ONE OF UDAIPUR'S MOST POPULAR TOURIST ATTRACTIONS</p>

        {/* description */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-gray-800 leading-8 text-justify text-base md:text-lg">{place.description}</p>
        </div>

        {/* divider */}
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

        {/* how to reach */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-serif tracking-[0.15em] mb-6">HOW TO REACH HERE</h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">One can visit {place.name} from anywhere in the city by tonga (horse-drawn carriage), auto-rickshaws, or by hiring a taxi.</p>
        </div>

        {/* wish to visit */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-serif tracking-[0.1em] mb-8">I WISH TO VISIT {place.name.toUpperCase()}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors">GET DIRECTIONS</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors">BOOK A TOUR</button>
            <Link to="/" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors">BACK TO PLACES</Link>
          </div>
        </div>

        {/* info cards */}
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

export default AttractionPage;
