import React from "react";

function Navbar() {
  return (
    // <nav className="bg-blue-500 text-white shadow-lg">
    //   <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    //     <h2 className="text-2xl font-bold">Recipe Vault</h2>
    //     <div>
    //       <a
    //         href="#"
    //         className="text-white hover:text-blue-200 transition-colors duration-300"
    //       >
    //         Home
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    <nav className="fixed top-0 left-0 right-0 bg-blue-600 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className=" font-cursive text-2xl font-thin text-white">Recipe Vault</h1>
          </div>
          <div className="flex items-center space-x-4">
            <p className=" font-cursive text-2xl font-thin text-white">Explore foods from around the globe</p>
             
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
