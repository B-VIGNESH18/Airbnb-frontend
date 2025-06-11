
// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Retrieve token from local storage

//     if (token) {
//       axios
//         .get("https://airbnb-backend-aaky.onrender.com", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Send the token in the Authorization header
//           },
//         })
//         .then(({ data }) => {
//           setUser(data.userDoc); // Adjust based on your actual data structure
//           setReady(true);
//         })
//         .catch((error) => {
//           console.error("Error fetching profile:", error);
//           setReady(true); // Set ready to true even if there is an error
//         });
//     } else {
//       setReady(true); // Set ready to true if there is no token
//     }
//   }, []); // Empty dependency array to run only on mount

//   return (
//     <UserContext.Provider value={{ user, setUser, ready }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
// UserContext.jsx
// src/context/UserContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("Raw token from localStorage:", token, typeof token);

    if (!token) {
      setReady(true);
      return;
    }

    // Remove extra quotes and trim whitespace if any
    token = token.replace(/^"|"$/g, "").trim();
    console.log("Processed token:", token);

    axios
      .get("https://airbnb-backend-aaky.onrender.com/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setUser(null);
      })
      .finally(() => setReady(true));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}


