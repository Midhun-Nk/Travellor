// const Fleet = () => {
//   const fleet = [
//     {
//       title: "Bus",
//       capacity: "49, 34 Seater",
//       icon: <Bus className="h-16 w-16" />,
//       desc: "Spacious and comfortable buses perfect for large groups, ensuring smooth long-distance travel.",
//     },
//     {
//       title: "Traveller",
//       capacity: "10, 12, 17, 19, 26 Seater",
//       icon: <Truck className="h-16 w-16" />, // Using 'Truck' as a proxy for a large van
//       desc: "Ideal for family or group tours — enjoy comfort, air conditioning, and extra luggage space.",
//     },
//     {
//       title: "Innova / Hycross",
//       icon: <Car className="h-16 w-16" />,
//       desc: "Premium comfort and reliability for small families and executive trips.",
//     },
//     {
//       title: "Rumion / Enjoy",
//       icon: <Car className="h-16 w-16" />,
//       desc: "Compact and efficient MPVs, great for city rides and family road trips.",
//     },
//     {
//       title: "Other Cars",
//       icon: <Car className="h-16 w-16" />,
//       desc: "We also provide a variety of other sedans and hatchbacks on request.",
//     },
//     {
//       title: "Your Choice",
//       icon: <Server className="h-16 w-16" />,
//       desc: "Have a specific vehicle requirement? Let us know and we will arrange it for you.",
//     },
//   ];

//   return (
//     <section id="fleet" className="py-20 md:py-28 bg-white">
//            {" "}
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
//                {" "}
//         <h2
//           className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//                     Our Vehicle Fleet        {" "}
//         </h2>
//                {" "}
//         <p className="text-lg md:text-xl text-gray-600 mb-12">
//                     Choose from our range of modern, well-maintained vehicles
//           for every           travel need.        {" "}
//         </p>
//                {" "}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
//                    {" "}
//           {fleet.map((item) => (
//             <div
//               key={item.title}
//               className="bg-gray-50 border border-orange-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//                             {/* This div replaces the <img> tag */}             {" "}
//               <div className="flex items-center justify-center h-52 bg-orange-100 text-orange-600">
//                                 {item.icon}             {" "}
//               </div>
//                            {" "}
//               <div className="p-6">
//                                {" "}
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                                     {item.title}              F{" "}
//                 </h3>
//                                {" "}
//                 {item.capacity && (
//                   <p className="text-orange-500 font-medium mb-3">
//                             _             {item.capacity}                 {" "}
//                   </p>
//                 )}
//                                 <p className="text-gray-700">{item.desc}</p>   
//                          {" "}
//               </div>
//                          {" "}
//             </div>
//           ))}
//                  {" "}
//         </div>
//              {" "}
//       </div>
//          {" "}
//     </section>
//   );
// };