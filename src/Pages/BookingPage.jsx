import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDate";
import AccountNavigation from "../AccountNavigation";

export default function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (id) {
      axios.get('http://localhost:5000/bookings', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          const foundBooking = response.data.find(({ _id }) => _id === id);
          if (foundBooking) {
            setBooking(foundBooking);
          } else {
            setError('Booking not found.');
          }
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to fetch booking. Please try again later.');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/pulse.gif" alt="Loading..." className="w-16 h-16" /> 
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-xl text-red-500 p-6">{error}</div>;
  }

  if (!booking) {
    return <div className="text-center text-xl text-gray-700 p-6">No booking found.</div>;
  }

  return (
    <div className="my-8">
      <AccountNavigation />
      <h1 className="text-3xl text-gray-900 dark:text-white">{booking.place.title}</h1>
      <AddressLink className="my-2 block text-gray-700 dark:text-gray-300">{booking.place.address}</AddressLink>
      <div className="bg-gray-200 dark:bg-gray-800 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">Your booking information:</h2>
          <BookingDates booking={booking} />
        </div>
        <div className="bg-primary dark:bg-primary-dark p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="text-3xl">${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  );
}
