import { Link } from "react-router-dom";
import AccountNavigation from "../AccountNavigation";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImage";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('https://airbnb-backend-aaky.onrender.com/api/places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <AccountNavigation />
      <div className="text-center">
        {/* <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
          Add new place
        </Link> */}
      </div>
      <div className="mt-4">
        {places.length > 0 && places.map(place => (
          <Link 
            key={place._id}  // Add a unique key prop here
            to={'/account/places/' + place._id} 
            className="flex cursor-pointer gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700"
          >
            <div className="flex w-32 h-32 bg-gray-300 dark:bg-gray-600 grow shrink-0">
              <PlaceImg place={place} />
            </div>
            <div className="grow-0 shrink">
              <h2 className="text-xl text-gray-900 dark:text-gray-100">{place.title}</h2>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">{place.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
