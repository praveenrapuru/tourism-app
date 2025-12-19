function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const discoverLinks = ["Forts", "Palaces", "Museums", "Lakes", "Religious Places", "Wildlife", "National Police Memorial", "Destinations"];
  const experienceLinks = ["Fairs & Festivals", "Palace On Wheels", "Adventures", "Heritage Properties", "Travel Diaries", "Feedback"];
  const planLinks = ["Best Time To Visit", "How to Get There", "Foreign Tourists", "Travel Desk", "Packages", "Suggested Itineraries"];
  const knowLinks1 = ["Right To Information", "Films shot in Rajasthan", "Tenders, Notices & Circulars", "Auction", "Office Order Circulars", "Annual Progress Report", "Rajasthan Tourism Unit Policy 2024", "Privacy Policy & Disclaimers", "Tourist Assistance Force", "Investor Awareness", "Site Map"];
  const knowLinks2 = ["Acts, Policies and Schemes", "Rajasthan Film Tourism Promotion Policy, 2022", "Guest House Schemes", "Rajasthan Tourism Policy 2025 - New", "Travel Agency Registration Guideline", "List of Recognized Travel Agencies", "Heritage Certificate Guideline 2021", "Certified Heritage Properties", "India Tourism Offices", "RTDC"];

  return (
    <footer className="bg-amber-50">
      {/* social icons */}
      <div className="flex justify-center gap-3 py-8 border-t-4 border-orange-400">
        <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 2.5H8.33C5.02 2.5 2.5 5.02 2.5 8.33v7.34c0 3.31 2.52 5.83 5.83 5.83h7.34c3.31 0 5.83-2.52 5.83-5.83V8.33c0-3.31-2.52-5.83-5.83-5.83zm-4.17 14.17c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm5.25-8.25c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
        </a>
      </div>

      {/* links */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Discover</h3>
            <ul className="space-y-2">
              {discoverLinks.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Experience</h3>
            <ul className="space-y-2">
              {experienceLinks.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Plan</h3>
            <ul className="space-y-2">
              {planLinks.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium text-sm mt-4">Incredible India Tourist Infoline 1800-11-1363</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Know</h3>
            <ul className="space-y-2">
              {knowLinks1.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Know</h3>
            <ul className="space-y-2">
              {knowLinks2.map((link, i) => (
                <li key={i}><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-gray-800 font-semibold underline mb-2">Nodal Officer Website</h4>
          <p className="text-gray-700 text-sm">Smt. Harneet Kaur, ACP (DD)</p>
          <p className="text-gray-600 text-sm mb-4">For suggestions & feedback relating to website, please write to acpdd-dot@rajasthan.gov.in</p>

          <h4 className="text-gray-800 font-semibold mb-2">Core Nodal Officer</h4>
          <p className="text-gray-700 text-sm">Mr. Daleep Singh (Joint Director)</p>
          <p className="text-gray-600 text-sm mb-4">For any general queries or details, please mail us at namaste@rajasthan.gov.in or call 91-141-2822863</p>

          <p className="text-gray-600 text-sm mb-4">LAST UPDATE ON: 18th-Dec-2025</p>

          <div className="flex justify-end">
            <button onClick={scrollToTop} className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors">back to top</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
