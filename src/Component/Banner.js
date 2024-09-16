// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Sample banner data (from data.json or hardcoded)
// const bannerData = [
//   {
//     title: "HIGH END",
//     subtitle: "Over 15 years in the game & build successful, profitable products.",
//     buttonText: "Get in Touch",
//     imgUrl: "https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-1_1.jpg",
//     linkUrl: "#",
//   },
//   {
//     title: "Focus on People",
//     subtitle: "Our services are designed with people at the heart.",
//     buttonText: "Get Started",
//     imgUrl: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/arrow_infobox.png",
//     linkUrl: "#",
//   },
//   {
//     title: "Business Innovation",
//     subtitle: "Transform your company with modern strategies.",
//     buttonText: "Discover Now",
//     imgUrl: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/arrow_infobox.png",
//     linkUrl: "#",
//   },
// ];

// const BannerSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Initialize AOS (animation on scroll)
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   // Function to change the banner content every few seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % bannerData.length); // Loop through the data
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval); // Clear the interval when the component unmounts
//   }, []);

//   return (
//     <section className="relative h-screen bg-cover bg-center" 
//       style={{ backgroundImage: 'url("https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-1_1.jpg")' }}>
      
//       <div className="h-full w-full bg-black bg-opacity-50 flex items-center">
//         {/* Left-aligned text inside container */}
//         <div className="text-left text-white space-y-4 max-w-3xl px-8">
//           <h1 className="text-6xl font-bold">{bannerData[activeIndex].title}</h1>
//           <p className="text-lg">{bannerData[activeIndex].subtitle}</p>
//           <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
//             {bannerData[activeIndex].buttonText}
//           </button>
//         </div>
//       </div>

//       {/* Dynamic InfoSection */}
//       <div className="container mx-auto px-4 mt-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {bannerData.map((banner, index) => (
//             <div
//               key={index}
//               className={`text-left bg-white shadow-md p-6 rounded-lg transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
//               data-aos="fade-up"
//             >
//               <a href={banner.linkUrl} className="block">
//                 <h3 className="text-xl font-bold mb-4">{banner.title}</h3>
//                 <p className="text-lg">{banner.subtitle}</p>
//                 <div className="flex justify-start mb-4">
//                   <img
//                     src={banner.imgUrl}
//                     alt="arrow_infobox"
//                     className="h-10"
//                   />
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BannerSection;
import React from "react";

const BannerSection = () => {
  return (
    <section className="relative h-screen bg-gray-100 bg-cover bg-center" 
      style={{ backgroundImage: 'url("https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-1_1.jpg")' }}>
      
      {/* Main content container */}
      <div className="flex flex-col justify-center items-center h-full text-start col-md-9 ">
        {/* Main Text */}
        <div className="space-y-3">
          <h1 className="text-7xl font-bold text-black">
            HIGH END
          </h1>
          <div className="flex items-center justify-center ">
            <img
              src="https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/arrow_orange.png"
              alt="arrow"
              className="w-15 h-12 mr-3"
            />
            <h2 className="text-7xl font-bold text-gray-600">
              CREATIVE
            </h2>
          </div>
          <h1 className="text-7xl font-bold text-black">
            AGENCY
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-gray-600 text-lg mt-6">
          Over 15 years in the game & build successful, profitable products.
        </p>

        {/* Button */}
        <div className="mt-8">
          <a href="#contact" className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-all duration-300">
            GET IN TOUCH
          </a>
        </div>
      </div>
      
      {/* Social Media (Sidebar-like styling) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-16 text-gray-600 text-sm ">
        <div className="rotate-90 transform-origin-left">
          FACEBOOK
        </div>
        <div className="rotate-90 transform-origin-left">
          TWITTER
        </div>
        <div className="rotate-90 transform-origin-left">
          INSTAGRAM
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
