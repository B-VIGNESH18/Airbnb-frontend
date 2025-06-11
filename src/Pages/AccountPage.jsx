import { useContext, useState } from "react";
import { UserContext } from '../UseContext'
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from './PlacesPages'
import AccountNavigation from '../AccountNavigation'

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }


  async function logout() {
    const token = localStorage.getItem("token");
    await axios.post('http://localhost:5000/logout', {}, { headers: { Authorization: `Bearer ${token}`, }, });
    localStorage.removeItem("token");
    alert("Logged out successfully");
    setRedirect('/');
    setUser(null);
  }


  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <AccountNavigation />
      {subpage === 'profile' && (
       <div className="text-center max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
       <img 
         src="https://media4.giphy.com/media/bcKmIWkUMCjVm/200.webp?cid=790b7611p0iq51zufgd2jxiz21rt7n9knowy9i9r2uli3w2p&ep=v1_gifs_search&rid=200.webp&ct=g" 
         alt="Welcome Animation" 
         className="w-50 h-55 mx-auto mb-4 rounded-full"
       />
       <p className="text-lg font-semibold text-gray-700">
         Logged in as <span className="text-blue-600">{user.name}</span>
       </p>
       <p className="text-sm text-gray-500 mb-4">{user.email}</p>
       <button
         onClick={logout}
         className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300"
       >
         Logout
       </button>
     </div>
     
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
  );
}