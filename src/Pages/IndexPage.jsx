// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Image from "../Image.jsx";



// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://airbnb-backend-aaky.onrender.com/api/places', {
//       withCredentials: true
//     })
//       .then(response => {
//         setPlaces(response.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to connect to the backend. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <img src="/pulse.gif" alt="Loading..." className="w-16 h-16" /> 
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-xl text-red-500 p-6">{error}</div>;
//   }

//   return (
//     <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300`}>
//       {places.length > 0 ? (
//         <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
//           {places.map(place => (
//             <Link
//               to={'/place/' + place._id}
//               key={place._id}
//               className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <div className="relative w-full h-60">
//                 {place.photos?.[0] && (
//                   <Image
//                     className="absolute inset-0 w-full h-full object-cover"
//                     src={place.photos[0]}
//                     alt={place.title}
//                   />
//                 )}
//               </div>
//               <div className="p-4">
//                 <h2 className="font-semibold text-lg mb-1 group-hover:text-blue-600">{place.address}</h2>
//                 <h3 className="text-md text-gray-700 dark:text-gray-300 mb-2 truncate">{place.title}</h3>
//                 <div className="mt-1">
//                   <span className="font-bold text-xl text-gray-900 dark:text-gray-100">${place.price}</span>
//                   <span className="text-sm text-gray-500 dark:text-gray-400"> per night</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center p-6">
//           <h2 className="text-2xl font-bold mb-4">Welcome to Airbnb!</h2>
//           <p className="text-lg">
//             Discover amazing places to stay, from cozy homes to luxurious apartments.
//             Whether you're planning a weekend getaway or a long vacation, Airbnb has something for everyone.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Image from "../Image.jsx";

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://airbnb-backend-aaky.onrender.com/api/places", {
//         withCredentials: true,
//       })
//       .then((response) => {
//         setPlaces(response.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to connect to the backend. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <img src="/pulse.gif" alt="Loading..." className="w-16 h-16" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-xl text-red-500 p-6">{error}</div>
//     );
//   }

//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300">
//       {/* Places grid */}
//       {places.length > 0 ? (
//         <div className="mt-8 max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4">
//           {places.map((place) => (
//             <Link
//               to={"/place/" + place._id}
//               key={place._id}
//               className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <div className="relative w-full h-60">
//                 {place.photos?.[0] && (
//                   <Image
//                     className="absolute inset-0 w-full h-full object-cover"
//                     src={place.photos[0]} // pass only filename, Image.jsx adds base URL
//                     alt={place.title}
//                   />
//                 )}
//               </div>
//               <div className="p-4">
//                 <h2 className="font-semibold text-lg mb-1 group-hover:text-blue-600">{place.address}</h2>
//                 <h3 className="text-md text-gray-700 dark:text-gray-300 mb-2 truncate">{place.title}</h3>
//                 <div className="mt-1">
//                   <span className="font-bold text-xl text-gray-900 dark:text-gray-100">${place.price}</span>
//                   <span className="text-sm text-gray-500 dark:text-gray-400"> per night</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center p-6 max-w-3xl mx-auto">
//           <h2 className="text-2xl font-bold mb-4">Welcome to Airbnb!</h2>
//           <p className="text-lg">
//             Discover amazing places to stay, from cozy homes to luxurious apartments.
//             Whether you're planning a weekend getaway or a long vacation, Airbnb has something for everyone.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Image from "../Image.jsx"; // Make sure this handles the base URL

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://airbnb-backend-aaky.onrender.com/api/places", {
//         withCredentials: true,
//       })
//       .then((response) => {
//         setPlaces(response.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to connect to the backend. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <img src="/pulse.gif" alt="Loading..." className="w-16 h-16" />
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-xl text-red-500 p-6">{error}</div>;
//   }

//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300 min-h-screen px-6 py-10">
//       {places.length > 0 ? (
//         <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {places.map((place) => (
//             <Link
//               to={`/place/${place._id}`}
//               key={place._id}
//               className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <div className="relative w-full h-48">
//                 {place.photos?.[0] && (
//                   <Image
//                     className="absolute inset-0 w-full h-full object-cover"
//                     src={place.photos[0]}
//                     alt={place.title}
//                   />
//                 )}
//               </div>
//               <div className="p-4">
//                 <h2 className="font-semibold text-md md:text-lg mb-1 group-hover:text-blue-600">
//                   {place.address}
//                 </h2>
//                 <h3 className="text-sm text-gray-700 dark:text-gray-300 mb-2 truncate">
//                   {place.title}
//                 </h3>
//                 <div className="mt-1">
//                   <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
//                     ${place.price}
//                   </span>
//                   <span className="text-sm text-gray-500 dark:text-gray-400"> per night</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center p-6 max-w-3xl mx-auto">
//           <h2 className="text-2xl font-bold mb-4">Welcome to Airbnb!</h2>
//           <p className="text-lg">
//             Discover amazing places to stay, from cozy homes to luxurious apartments.
//             Whether you're planning a weekend getaway or a long vacation, Airbnb has something for everyone.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";



export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://airbnb-backend-aaky.onrender.com/api/places', {
      withCredentials: true
    })
      .then(response => {
        setPlaces(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to connect to the backend. Please try again later.');
        setLoading(false);
      });
  }, []);

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

  return (
    <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300`}>
      {places.length > 0 ? (
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {places.map(place => (
            <Link
              to={'/place/' + place._id}
              key={place._id}
              className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-60">
                {place.photos?.[0] && (
                  <Image
                    className="absolute inset-0 w-full h-full object-cover"
                    src={place.photos[0]}
                    alt={place.title}
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-1 group-hover:text-blue-600">{place.address}</h2>
                <h3 className="text-md text-gray-700 dark:text-gray-300 mb-2 truncate">{place.title}</h3>
                <div className="mt-1">
                  <span className="font-bold text-xl text-gray-900 dark:text-gray-100">${place.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400"> per night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to Airbnb!</h2>
          <p className="text-lg">
            Discover amazing places to stay, from cozy homes to luxurious apartments.
            Whether you're planning a weekend getaway or a long vacation, Airbnb has something for everyone.
          </p>
        </div>
      )}
    </div>
  );
}