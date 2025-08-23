import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Filter, ChevronDown } from "lucide-react"

const PropertyListings = () => {
  const filterOptions = [
    { label: "All", active: true },
    { label: "Top Villa", active: false },
    { label: "Free Reschedule", active: false },
    { label: "Book Now, Pay later", active: false },
    { label: "Self Checkin", active: false },
    { label: "Instant Book", active: false },
  ]

  const properties = [
    {
      id: 1,
      image: "/property-9.png",
      discount: "60% Off",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Villa Arrecife Beach House",
      location: "Sidemen, Bali, Indonesia",
      rating: 4.76,
      guests: 4,
      bedrooms: 2,
      bathrooms: 4,
      price: 2450,
      period: "n",
    },
    {
      id: 2,
      image: "/property-11.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Entire cabin",
      location: "Nova Friburgo, Brazil",
      rating: 4.76,
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      price: 62,
      period: "n",
    },
    {
      id: 3,
      image: "/property-12.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Earthen home",
      location: "Santa Marta, Colombia",
      rating: 4.76,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 386,
      period: "n",
    },
    {
      id: 4,
      image: "/property-13.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Private room",
      location: "Maceió, Brazil",
      rating: 4.76,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 134,
      period: "n",
    },
    {
      id: 5,
      image: "/property-14.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Gokce Gemile Estate",
      location: "Kaputaş, Turkey",
      rating: 4.76,
      guests: 8,
      bedrooms: 5,
      bathrooms: 12,
      price: 980,
      period: "n",
    },
    {
      id: 6,
      image: "/property-15.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Luxury 1000 sqm Villa",
      location: "Marrakech, Morocco",
      rating: 4.76,
      guests: 12,
      bedrooms: 6,
      bathrooms: 12,
      price: 1430,
      period: "n",
    },
    {
      id: 7,
      image: "/property-16.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Palais Hassoun Marrakech",
      location: "Marrakech, Morocco",
      rating: 4.76,
      guests: 26,
      bedrooms: 14,
      bathrooms: 26,
      price: 3450,
      period: "n",
    },
    {
      id: 8,
      image: "/property-17.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Villa Lamp",
      location: "Benalmadena, Spain",
      rating: 4.76,
      guests: 12,
      bedrooms: 7,
      bathrooms: 12,
      price: 2041,
      period: "n",
    },
    {
      id: 9,
      image: "/property-18.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Villa l'Oui d'Or",
      location: "Marrakech, Morocco",
      rating: 4.76,
      guests: 14,
      bedrooms: 8,
      bathrooms: 7,
      price: 1009,
      period: "n",
    },
    {
      id: 10,
      image: "/property-19.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Designer villa, pool not ...",
      location: "Marrakech, Morocco",
      rating: 4.76,
      guests: 12,
      bedrooms: 6,
      bathrooms: 6,
      price: 1289,
      period: "n",
    },
    {
      id: 11,
      image: "/property-20.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Royal Zephyr - Marrakech",
      location: "Playas de Vera, Spain",
      rating: 4.76,
      guests: 12,
      bedrooms: 6,
      bathrooms: 7,
      price: 1692,
      period: "n",
    },
    {
      id: 12,
      image: "/property-5.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Riad Mago & Bungalows",
      location: "Sidi Abdallah Ghiat, Morocco",
      rating: 4.76,
      guests: 16,
      bedrooms: 21,
      bathrooms: 18,
      price: 865,
      period: "n",
    },
    {
      id: 13,
      image: "/property-4.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Casa de Carolina",
      location: "Playas de Vera, Spain",
      rating: 4.76,
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      price: 215,
      period: "n",
    },
    {
      id: 14,
      image: "/property-3.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Happy Valley Villa, Tuni...",
      location: "Qaroun, Egypt",
      rating: 4.76,
      guests: 8,
      bedrooms: 7,
      bathrooms: 3,
      price: 100,
      period: "n",
    },
    {
      id: 15,
      image: "/property-2.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Almyros Residence",
      location: "Lasithi, Greece",
      rating: 4.76,
      guests: 10,
      bedrooms: 6,
      bathrooms: 4,
      price: 747,
      period: "n",
    },
    {
      id: 16,
      image: "/property-1.png",
      tags: ["Top Villa", "Self Checkin", "Free Reschedule"],
      title: "Villa White Stone mode...",
      location: "Marrakech, Morocco",
      rating: 4.76,
      guests: 12,
      bedrooms: 7,
      bathrooms: 6,
      price: 1798,
      period: "n",
    },
  ]

  return (
    <div className="px-4 py-6">
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center max-w-[1025px] h-[51px] w-full gap-4 flex-wrap">
          {filterOptions.map((option) => (
            <Button
              key={option.label}
              variant={option.active ? "ouline" : ""}
              className={`rounded-full ${
                option.active
                  ? "bg-[#F0FFFB] text-[#34967C] border border-[#34967C]"
                  : "bg-transparent text-gray-700 border-[#E9E9E9] border hover:bg-gray-50"
              }`}
            >
              {option.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center max-w-[387px] h-[51px] gap-4">
          <Button variant="outline" className="flex items-center gap-2 rounded-full bg-transparent">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2 rounded-full bg-transparent">
            Sort by: Highest Price
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-0">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden border-0 rounded-md hover:shadow-md hover:rounded-3xl transition-shadow ">
            <div className="relative ">
              <img
              loading="lazy"
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-64 object-cover rounded-2xl aspect-[1:1]"
              />
              {property.discount && (
                <Badge className="absolute top-3 left-3 bg-green-500 text-white">{property.discount}</Badge>
              )}
            </div>

            <div className="p-4 -mt-6 ">
              {/* Tags */}
              <div className="flex w-full h-7 gap-2 mb-2 text-xs text-gray-500">
                {property.tags.map((tag) => (
                  <span key={tag} className=" rounded-4xl bg-[#F9F9F9] text-center p-1 w-fit">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                {/** Title and Location **/}
                <div>
                    <h3 className="font-semibold text-black text-xl mb-1 font-quicksand">{property.title}</h3>
              <p className="text-sm text-gray-600 mb-2 font-quicksand">{property.location}</p>
                </div>
                

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3 font-quicksand">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{property.rating}</span>
              </div>

              </div>

              {/* Title and Location */}
              

              <div className="flex items-center justify-between">
                  {/* Amenities */}
              <div className="flex items-center border border-[#E9E9E9] w-38 p-2 rounded-3xl gap-4 mb-3 text-sm text-black">
                
                <div className="flex items-center gap-1">
                  <img src="/bed-icon.svg" className="w-4 h-4 object-cover" alt="" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/Shower.svg" className="w-4 h-4 object-cover" alt="" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 fill-black" />
                  <span>{property.guests}</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-right text-[#161117]">
                <span className="text-xl font-semibold font-quicksand">${property.price.toLocaleString()}</span>
                <span className="text-sm font-medium">/{property.period}</span>
              </div>

              </div>

            
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center mt-20 gap-2 py-3">
        <Button className="bg-black text-white font-quicksand rounded-4xl py-6 text-md w-[10%] ">Show more</Button>
        <p className="text-md font-quicksand text-black">Click to see more listings</p>
      </div>
    </div>
  )
}

export default PropertyListings
