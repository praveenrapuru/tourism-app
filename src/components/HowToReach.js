function HowToReach() {
  return (
    <section className="bg-[#FBF7E6] px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-serif tracking-widest mb-10 flex items-center gap-3">
            HOW TO REACH HERE
            <span className="text-orange-500">✦</span>
          </h2>

          {/* by air */}
          <div className="flex gap-4 mb-6 pb-6 border-b border-orange-300">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Dabok Airport, also known as Maharana Pratap Airport is the closest at about 25 km northeast of the city centre. There are daily flights from Delhi and Mumbai on Jet Airways, Air India and SpiceJet.
            </p>
          </div>

          {/* by road */}
          <div className="flex gap-4 mb-6 pb-6 border-b border-orange-300">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Udaipur is easily accessible by road from every major destination in India, including Chittorgarh, Ahmedabad, Jodhpur, Ajmer, Sawai Madhopur / Ranthambore, Jaipur, Bikaner, Agra, Delhi, Mumbai and Khajuraho.
            </p>
          </div>

          {/* by rail */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Udaipur is connected by rail to several major cities in India including Chittorgarh, Ahmedabad, Ajmer, Sawai Madhopur, Jaipur, Agra, Delhi, Mumbai and Khajuraho.
            </p>
          </div>
        </div>

        {/* map */}
        <div className="flex-shrink-0 lg:w-80 flex items-center justify-center">
          <div className="relative">
            <svg viewBox="0 0 200 200" className="w-64 h-64 text-orange-200">
              <path fill="currentColor" d="M40,20 L80,10 L120,15 L160,25 L180,50 L185,80 L175,120 L160,150 L130,170 L100,180 L60,175 L30,150 L15,120 L10,80 L20,50 Z" />
            </svg>
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-10 h-14 bg-gray-800 rounded-full flex items-center justify-center relative">
                <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white"></div>
                </div>
                <div className="absolute -bottom-2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-800"></div>
              </div>
              <span className="mt-4 text-gray-800 font-semibold tracking-wider">UDAIPUR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToReach;
