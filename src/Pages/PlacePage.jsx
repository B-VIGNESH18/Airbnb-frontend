import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";
import { UserContext } from "../UseContext"; // Import UserContext

export default function PlacePage() {
  const { id } = useParams();   
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { user, ready } = useContext(UserContext); 





  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get(`https://airbnb-backend-aaky.onrender.com/api/places/${id}`)
      .then((response) => {
        setPlace(response.data);
        setLoading(false); // Data loaded
      })
      .catch((err) => {
        console.error(err); // Log error for debugging
        setError("Failed to load the place details. Please try again later.");
        setLoading(false); // Loading finished, but with error
      });
  }, [id]);     

  // Show preloader while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/pulse.gif" alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  // Show error message if an error occurs
  if (error) {
    return <div className="text-center text-xl text-red-500 p-6">{error}</div>;
  }

  // If place data is not available, return an empty string (or handle this case as needed)
  if (!place) return "";

  // Function to handle booking
  const handleBookingClick = () => {
    if (!user) {
      alert("Please log in to access the booking feature.");
    }
  };

  return (
    <div className="mt-4 bg-gray-100 dark:bg-gray-900 -mx-8 px-8 pt-8">
      <h1 className="text-3xl text-gray-900 dark:text-white">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">Description</h2>
            <p className="text-gray-700 dark:text-gray-300">{place.description}</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Check-in: {place.checkIn}<br />
            Check-out: {place.checkOut}<br />
            Max number of guests: {place.maxGuests}
          </p>
        </div>
        <div>
          {/* Only allow booking if the user is logged in */}
          {user ? (
            <BookingWidget place={place} />
          ) : (
            <button
              onClick={handleBookingClick}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 -mx-8 px-8 py-8 border-t dark:border-gray-700">
        <div>
          <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 dark:text-gray-300 leading-5">{place.extraInfo}</div>
      </div>
    </div>
  );
}
