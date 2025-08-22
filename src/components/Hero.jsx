const Hero = () => {
  return (
    <div className="max-w-[1609px] mx-auto px-4 sm:px-6 lg:px-8 pt-27 ">
      {/* Hero Image with Overlay Text */}
      <div className="relative h-[425px] aspect-[1:1] rounded-3xl overflow-hidden">
        <img
          className="w-full h-full object-cover "
          src="/hero-image.jpg"
          alt="Beautiful mountain lake with wooden cabins"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col max-w-4xl mx-auto items-center justify-center text-center text-white">
          <h1 className="text-7xl md:text-5xl lg:text-6xl font-semibold mb-4 ">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl font-medium opacity-90">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
