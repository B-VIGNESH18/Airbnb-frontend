import React from 'react';

const PlaceCard = ({ title, image, address, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md w-64 m-4">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{address}</p>
        <p className="text-lg font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
