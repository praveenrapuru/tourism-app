function Hero() {
  return (
    <section
      className="h-[70vh] md:h-[80vh] relative flex flex-col justify-center items-center text-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/images/first-page.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 bottom-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] mb-3 text-white drop-shadow-lg" style={{ fontFamily: 'serif' }}>UDAIPUR</h1>
        <p className="text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-white drop-shadow-md font-light" style={{ fontFamily: 'serif' }}>MONSOON PALACE</p>
      </div>
    </section>
  );
}

export default Hero;
