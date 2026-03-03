import React from "react";
import ChildTable from "./ChildTable";

const ClientTable = () => {
  const clients = [
    {
      id: 1,
      name: "Chandler Jacobi",
      role: "Direct Security Executive",
      amount: 989.4,
      status: "primary",
      date: "2/3/2020",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Monserrat Marquardt",
      role: "Forward Accountability Producer",
      amount: 471.44,
      status: "danger",
      date: "11/29/2019",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      name: "Lonie Wyman",
      role: "Legacy Program Director",
      amount: 934.24,
      status: "success",
      date: "4/3/2020",
      image: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      name: "Corine Abernathy",
      role: "Chief Factors Planner",
      amount: 351.28,
      status: "warning",
      date: "6/21/2019",
      image: "https://i.pravatar.cc/40?img=4",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="grid grid-cols-4 px-6 py-4 bg-gray-50 text-gray-500 text-sm font-semibold">
          <span>CLIENT</span>
          <span>AMOUNT</span>
          <span>STATUS</span>
          <span>DATE</span>
        </div>

        {/* Parent maps and passes individual props */}
        {clients.map((client) => (
          <ChildTable key={client.id} {...client} />
        ))}

      </div>
    </div>
  );
};

export default ClientTable;