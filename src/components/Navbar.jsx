"use client";

import { Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { format } from "date-fns";

const Navbar = () => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const accommodationTypes = [
    { label: "Rooms", icon: "/Rooms.svg" },
    { label: "Mansion", icon: "/Mansion.svg" },
    { label: "Countryside", icon: "/Countryside.svg" },
    { label: "Villa", icon: "/Villa.svg" },
    { label: "Tropical", icon: "/Tropical.svg" },
    { label: "New", icon: "/New.svg" },
    { label: "Amazing Pool", icon: "/Amazing pool.svg" },
    { label: "Beach house", icon: "/Beach.svg" },
    { label: "Island", icon: "/Island.svg" },
    { label: "Camping", icon: "/Camping.svg" },
    { label: "Apartment", icon: "/Apartment.svg" },
    { label: "House", icon: "/House.svg" },
    { label: "Lakefront", icon: "/Lakefront house.svg" },
    { label: "Farm house", icon: "/Farmhouse.svg" },
    { label: "Treehouse", icon: "/Treehouse.svg" },
    { label: "Cabin", icon: "/Cabins.svg" },
    { label: "Castles", icon: "/Castles.svg" },
  ];

  return (
    <div className="w-full h-[100px] sticky top-0 z-50">
      <div>
        {/* first row */}
        <div className="flex items-center justify-center bg-[#34967C] text-white h-[47px] gap-3">
          <ShoppingBag />
          <p>Overseas trip? Get the latest information on travel guides</p>
          <Button
            variant={"default"}
            className="bg-black rounded-full text-white px-3"
          >
            More info
          </Button>
        </div>

        {/* second row */}
        <div className="flex items-center justify-between w-full h-[75px] border-b border-gray-200 px-10 bg-white">
          <div>
            <img src="/logo.png" alt="Logo" className="h-8" />
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center w-[737px] h-[58px] border border-[#F6F6F6] rounded-full bg-white shadow-sm">
            {/* Location */}
            <div className="flex flex-col px-6 w-[133px] h-[40px] justify-center">
              <span className="text-[14px] font-quicksand font-medium leading-[18px] text-[#161117]">
                Location
              </span>
              <span className="text-[13px] font-quicksand font-normal leading-[16px] text-[#BEBEBE]">
                Search for destination
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-[#E9E9E9]" />

            {/* Check In */}
            <div className="flex flex-col px-6 w-[56px] h-[40px] justify-center">
              <span className="text-[14px] font-quicksand font-medium leading-[18px] text-[#161117]">
                Check in
              </span>
              <span className="text-[13px] font-quicksand font-normal leading-[16px] text-[#BEBEBE]">
                Add date
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-[#E9E9E9]" />

            {/* Check Out */}
            <div className="flex flex-col px-6 w-[66px] h-[40px] justify-center">
              <span className="text-[14px] font-quicksand font-medium leading-[18px] text-[#161117]">
                Check out
              </span>
              <span className="text-[13px] font-quicksand font-normal leading-[16px] text-[#BEBEBE]">
                Add date
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-[#E9E9E9]" />

            {/* People */}
            <div className="flex flex-col px-6 w-[66px] h-[40px] justify-center">
              <span className="text-[14px] font-quicksand font-medium leading-[18px] text-[#161117]">
                People
              </span>
              <span className="text-[13px] font-quicksand font-normal leading-[16px] text-[#BEBEBE]">
                Add guest
              </span>
            </div>

            {/* Search Button */}
            <div className="absolute right-[11px] top-[8px] flex items-center justify-center w-[42px] h-[42px] bg-[#FFA800] rounded-full">
              <Search className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={"default"}
              className="bg-[#34967C] h-[45px] w-[103px] rounded-full text-white text-sm "
            >
              Sign in
            </Button>
            <Button
              variant={"outline"}
              className="bg-transparent text-sm border border-gray-300 w-[103px] h-[45px] rounded-full text-black p-4 hover:bg-gray-50"
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/*third row */}
        <div className="flex items-center border font-quicksand border-[#FDFDFD] bg-white justify-between w-full px-13 py-3 overflow-x-auto scrollbar-hide">
          {accommodationTypes.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center min-w-fit cursor-pointer hover:opacity-75 transition-opacity"
            >
              <div className="w-7 h-7 mb-2 flex items-center justify-center">
                <img
                  src={icon || "/placeholder.svg"}
                  alt={label}
                  className=" h-full object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
