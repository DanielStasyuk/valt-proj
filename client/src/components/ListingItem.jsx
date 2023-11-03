import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";

export default function ListingItem({ listing }) {
  return (
    <div className="w-full sm:w-[330px] bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg">
      <Link to={`/listing/${listing._id}`}>
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          src={listing.imageUrls[0]}
          alt="listing cover"
        />
        <div className="p-3 flex flex-col gap-2">
          <p className="truncate  text-lg font-semibold text-slate-700 ">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-700 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" ? " / month" : ""}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs flex items-center gap-1">
              <FaBed className="text-green-700" />
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed`}
            </div>
            <div className="font-bold text-xs flex items-center gap-1">
              <FaBath className="text-green-700" />
              {listing.bathrooms > 1
                ? `${listing.bedrooms} baths `
                : `${listing.bedrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

ListingItem.propTypes = {
  listing: PropTypes.object.isRequired,
};