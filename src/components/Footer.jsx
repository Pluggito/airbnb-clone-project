export default function Footer() {
  return (
    <>
    <div className="bg-[#34967C] w-full h-[29px]"></div>
    <footer className="bg-[#222222] text-gray-300 py-7 px-6 font-quicksand">
      <div className="">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-10 lg:px-6 w-full mb-20">
          {/* ALX Brand Section */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <img src="/Logo (2).svg" className="" alt="" />
            </div>
            <p className="text-[#CACACA] text-base leading-relaxed w-[600px]">
              ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging
              options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas,
              ALX connects you with the perfect place to stay for any trip.
            </p>
          </div>

          {/* Explore Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[#CACACA] text-2xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Apartments in Dubai
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Hotels in New York
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Villa in Spain
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Mansion in Indonesia
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h3 className="text-[#CACACA] text-2xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Brand
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="lg:col-span-2">
            <h3 className=" text-2xl text-[#CACACA] font-semibold mb-6">Help</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Cancel booking
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CACACA] text-sm hover:text-white transition-colors">
                  Refunds Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with divider */}
        <div className="border-t border-gray-700 pt-4 mt-15">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Cancellation notice */}
            <div className="text-gray-400 text-sm">
              Some hotel requires you to cancel more than 24 hours before check-in. Details{" "}
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                here
              </a>
            </div>

            {/* Footer links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Policy service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Partners
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
    
    
  )
}
