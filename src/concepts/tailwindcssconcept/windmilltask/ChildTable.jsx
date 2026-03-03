import React from "react";

const ChildTable = ({ name, role, amount, status, date, image }) => {
  const statusStyles = {
    primary: "bg-purple-100 text-purple-600",
    danger: "bg-red-100 text-red-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="grid grid-cols-4  items-center px-6 py-4 border-t hover:bg-gray-50 transition duration-200">
      
      
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      
      <div className="text-sm font-medium text-gray-700">
        ${amount}
      </div>

     
      <div>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      
      <div className="text-sm text-gray-600">{date}</div>
    </div>
  );
};

export default ChildTable;