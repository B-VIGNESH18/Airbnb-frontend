import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div>
      <h5 className="font-bold text-lg mb-4">Inspiration for future getaways</h5>
      <ul>
        <li><a href="#" className="hover:underline">Popular</a></li>
        <li><a href="#" className="hover:underline">Arts & culture</a></li>
        <li><a href="#" className="hover:underline">Outdoors</a></li>
        <li><a href="#" className="hover:underline">Mountains</a></li>
        <li><a href="#" className="hover:underline">Beach</a></li>
        <li><a href="#" className="hover:underline">Unique stays</a></li>
      </ul>
    </div>

 
    <div>
      <h5 className="font-bold text-lg mb-4">Categories</h5>
      <ul>
        <li><a href="#" className="hover:underline">Canmore - Chalet rentals</a></li>
       
        <li><a href="#" className="hover:underline">Mountain View - Pet-friendly rentals</a></li>
        <li><a href="#" className="hover:underline">Devonport - Cottage rentals</a></li>
        <li><a href="#" className="hover:underline">Mallacoota - Beach house rentals</a></li>
        <li><a href="#" className="hover:underline">Ibiza - Holiday rentals</a></li>
        <li><a href="#" className="hover:underline">Anaheim - Apartment rentals</a></li>
        <li><a href="#" className="hover:underline">Monterey - Holiday rentals</a></li>
        <li><a href="#" className="hover:underline">Paso Robles - Holiday rentals</a></li>
        <li><a href="#" className="hover:underline">Santa Barbara - House rentals</a></li>
        <li><a href="#" className="hover:underline">Sonoma - House rentals</a></li>
      </ul>
    </div>

   
    <div>
      <h5 className="font-bold text-lg mb-4">Support</h5>
      <ul>
        <li><a href="#" className="hover:underline">Help Centre</a></li>
        <li><a href="#" className="hover:underline">AirCover</a></li>
        <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
        <li><a href="#" className="hover:underline">Disability support</a></li>
        <li><a href="#" className="hover:underline">Cancellation options</a></li>
        <li><a href="#" className="hover:underline">Report neighbourhood concern</a></li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-8 pt-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
    </div>
  </div>
  <div className="col-span-2 text-center">
        <p>© 2024 Airbnb, Inc. · <a href="#" className="hover:underline">Privacy</a> · <a href="#" className="hover:underline">Terms</a> · <a href="#" className="hover:underline">Sitemap</a> · <a href="#" className="hover:underline">Company details</a></p>
      </div>
</footer>

    </div>
  )
}

export default Footer
