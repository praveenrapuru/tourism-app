import { Link } from "react-router-dom";
import { usePlaces } from "../context/PlacesContext";

function Places() {
  const { places, loading, error } = usePlaces();

  if (loading) {
    return (
      <section className="bg-amber-50 py-20">
        <div className="text-center">
          <p className="text-gray-600">Loading places...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-amber-50 py-20">
        <div className="text-center">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  // group places in pairs for layout
  let placePairs = [];
  for (let i = 0; i < places.length; i += 2) {
    placePairs.push(places.slice(i, i + 2));
  }

  return (
    <section className="bg-amber-50">
      <div className="w-full">
        {placePairs.map((pair, idx) => (
          <div key={idx}>
            <div className="grid grid-cols-2">
              {pair.map(place => (
                <div key={place.id} className="h-80 md:h-[400px]">
                  <img
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'high-quality' }}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2">
              {pair.map(place => (
                <div key={place.id} className="p-6">
                  <h3 className="text-lg md:text-xl font-medium tracking-wide mb-3 text-gray-800" style={{ fontFamily: 'serif' }}>
                    {place.name.toUpperCase()}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                    {place.description}
                  </p>
                  <Link
                    to={`/attraction/${place.id}`}
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-colors"
                  >
                    EXPLORE
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Places;
