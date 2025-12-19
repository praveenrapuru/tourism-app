import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePlaces } from "../context/PlacesContext";

function Navbar() {
  const [activeNav, setActiveNav] = useState("DISCOVER");
  const [showDropdown, setShowDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { places } = usePlaces();

  // filter places based on search
  const filteredPlaces = places.filter(place => {
    let q = searchQuery.toLowerCase();
    return place.name.toLowerCase().includes(q) || place.description.toLowerCase().includes(q);
  });

  // close search when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handlePlaceSelect(id) {
    setShowSearch(false);
    setSearchQuery("");
    navigate(`/attraction/${id}`);
  }

  const discoverItems = ["Destinations", "Forts", "Wildlife", "Palaces", "Museums", "Lakes", "Religious Places", "Panorama"];
  const experienceItems = ["Culture", "Festivals", "Food", "Shopping"];
  const planItems = ["Travel Guide", "Tour Packages", "Hotels", "Transport"];

  const leftNavItems = [
    { key: "discover", label: "DISCOVER", dropdown: discoverItems },
    { key: "experience", label: "EXPERIENCE", dropdown: experienceItems },
    { key: "plan", label: "PLAN", dropdown: planItems },
  ];

  const aboutUsItems = ["Filming In Rajasthan", "Tourism EServices", "Travel Agency Registration", "Guides & Travel Agency", "IHMs & FCIs", "Media", "Acts, Policies & Schemes", "Right To Information"];
  const stayItems = ["RTDC", "Paying Guest"];

  const rightNavItems = [
    { key: "aboutUs", label: "ABOUT US", dropdown: aboutUsItems },
    { key: "stay", label: "STAY", dropdown: stayItems },
    { key: "eTicketing", label: "E-TICKETING" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-amber-50 shadow-sm">
      {/* top utility bar */}
      <div className="bg-amber-50">
        <div className="px-4 md:px-8 py-2 flex justify-between items-center max-w-6xl mx-auto border-gray-100">
          <div className="flex items-center gap-4">
            <a href="#main" className="text-gray-700 hover:text-amber-600 font-light uppercase">Skip to Main Content</a>
            <span className="text-gray-300">|</span>
            <button className="text-gray-700 hover:text-amber-600 font-light uppercase">Screen Reader</button>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <button className="text-gray-600 hover:text-amber-600 font-sm">A-</button>
              <button className="text-gray-600 hover:text-amber-600 font-sm">A</button>
              <button className="text-gray-600 hover:text-amber-600 font-sm">A+</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <button className="w-5 h-5 bg-gray-300 rounded-sm hover:ring-2 ring-amber-400"></button>
              <button className="w-5 h-5 bg-gray-900 rounded-sm hover:ring-2 ring-amber-400"></button>
              <button className="w-5 h-5 bg-green-700 rounded-sm hover:ring-2 ring-amber-400"></button>
              <button className="w-5 h-5 bg-amber-700 rounded-sm hover:ring-2 ring-amber-400"></button>
            </div>
          </div>
        </div>
      </div>

      {/* main nav */}
      <nav className="bg-amber-50 px-7 md:px-10 py-5 relative">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          {/* left nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-800 hover:text-amber-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            {leftNavItems.map(item => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setShowDropdown(item.key)}
                onMouseLeave={() => setShowDropdown(null)}
              >
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={`text-sm font-medium tracking-wide transition-colors ${activeNav === item.label ? "text-amber-600" : "text-gray-800 hover:text-amber-600"}`}
                >
                  {item.label}
                </button>
                {showDropdown === item.key && item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-3 min-w-[200px] z-50 border-l-4 border-l-orange-500 border-t border-r border-b border-gray-100">
                    {item.dropdown.map((dropItem, i) => (
                      <Link key={i} to="/" className="block px-5 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-all duration-200 text-sm font-medium border-b border-gray-50 last:border-b-0">
                        {dropItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold border-4 border-amber-400">
              <div className="text-center leading-tight">
                <div className="text-[8px]">GOVT OF</div>
                <div className="text-[10px]">RAJ</div>
              </div>
            </div>
            <span className="text-[10px] text-gray-600 mt-1 font-medium uppercase tracking-wide">Rajasthan</span>
            <span className="text-[8px] text-gray-500 italic">The Incredible State of India !</span>
          </div>

          {/* right nav */}
          <div className="flex items-center gap-6">
            {rightNavItems.map(item => (
              <div
                key={item.key}
                className="relative hidden md:block"
                onMouseEnter={() => item.dropdown && setShowDropdown(item.key)}
                onMouseLeave={() => setShowDropdown(null)}
              >
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={`text-sm font-medium tracking-wide transition-colors ${activeNav === item.label ? "text-amber-600" : "text-gray-800 hover:text-amber-600"}`}
                >
                  {item.label}
                </button>
                {showDropdown === item.key && item.dropdown && (
                  <div className="absolute top-full left-5 mt-2 bg-white shadow-xl rounded-lg py-3 min-w-[200px] z-50 border-l-4 border-l-orange-500 border-t border-r border-b border-gray-100">
                    {item.dropdown.map((dropItem, i) => (
                      <Link key={i} to="/" className="block px-5 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-all duration-200 text-sm font-medium border-b border-gray-50 last:border-b-0">
                        {dropItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* search btn */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2" ref={searchRef}>
          <button onClick={() => setShowSearch(!showSearch)} className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1.5 text-gray-600 hover:border-amber-500 hover:text-amber-600 transition-colors bg-amber-50">
            <span className="text-sm hidden sm:inline">SEARCH</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {showSearch && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-xl rounded-lg z-50 border border-gray-200">
              <div className="p-3 border-b border-gray-100">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search places..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
                    autoFocus
                  />
                  <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {searchQuery.length > 0 ? (
                  filteredPlaces.length > 0 ? (
                    filteredPlaces.map(place => (
                      <button key={place.id} onClick={() => handlePlaceSelect(place.id)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors text-left border-b border-gray-50 last:border-b-0">
                        <img src={place.image} alt={place.name} className="w-12 h-12 object-cover rounded" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{place.name}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{place.description.slice(0, 50)}...</p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-6 text-center text-gray-500 text-sm">No places found</p>
                  )
                ) : (
                  <div className="px-4 py-4">
                    <p className="text-xs text-gray-500 mb-2">Popular Places</p>
                    {places.slice(0, 4).map(place => (
                      <button key={place.id} onClick={() => handlePlaceSelect(place.id)} className="w-full flex items-center gap-3 px-2 py-2 hover:bg-orange-50 transition-colors text-left rounded">
                        <img src={place.image} alt={place.name} className="w-10 h-10 object-cover rounded" />
                        <p className="text-sm text-gray-700">{place.name}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* decorative curve */}
        <div className="absolute left-4 md:left-8 bottom-0 w-48 md:w-64">
          <svg viewBox="0 0 200 20" className="w-full h-5">
            <path d="M0,15 Q50,0 100,15 Q150,30 200,15" fill="none" stroke="#f59e0b" strokeWidth="3" />
          </svg>
        </div>
      </nav>

      <div className="h-1 bg-amber-500"></div>
    </header>
  );
}

export default Navbar;
