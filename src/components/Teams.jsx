// import React, { useState, useRef, useEffect } from 'react' // Added hooks
// import Title from './Title' // This is no longer used, but I'll leave it in case other parts of your app use it.
// import { teamData } from '../assets/assets'
// import { motion } from "framer-motion" // ✅ Corrected import to framer-motion

// // ✅ NEW: Animated Accent Divider
// const AccentDivider = ({ align = 'center' }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.5 }
//         );
//         if (ref.current) {
//             observer.observe(ref.current);
//         }
//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current);
//             }
//         };
//     }, []); 

//     return (
//         <div
//             ref={ref}
//             style={{
//                 width: isVisible ? '100px' : '0px',
//                 height: '4px',
//                 backgroundColor: '#38b6ff',
//                 // Adjusted margin to fit between title and description
//                 margin: align === 'center' ? '20px auto 30px auto' : '20px 0 30px 0',
//                 transition: 'width 0.6s ease-out',
//                 borderRadius: '2px'
//             }}
//         ></div>
//     );
// };


// const TeamCard = ({ team, index }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [visible, setVisible] = useState(false)
//   const divRef = useRef(null)

//   const handleMouseMove = (e) => {
//     const bounds = divRef.current.getBoundingClientRect()
//     setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       ref={divRef}
//       onMouseEnter={() => setVisible(true)}
//      onMouseLeave={() => setVisible(false)}
//       onMouseMove={handleMouseMove}
//       className='relative flex flex-col items-center gap-4 p-4 rounded-2xl border border-[#38b6ff40]
//       shadow-[0_0_20px_#00043320] hover:shadow-[0_0_35px_#38b6ff80]
//       transition-all duration-500 bg-white/5 dark:bg-[#000433]/80 backdrop-blur-md cursor-pointer'
//     >
//       {/* 🔵 Hover Glow */}
//       <div
//         className={`pointer-events-none blur-3xl rounded-full 
//        bg-gradient-to-r from-[#38b6ff] via-[#1a4aff] to-[#000433] 
//         w-[200px] h-[200px] absolute z-0 transition-opacity duration-500 mix-blend-screen 
//         ${visible ? 'opacity-60' : 'opacity-0'}`}
//         style={{ top: position.y - 100, left: position.x - 100 }}
//      />

//       {/* 🌟 Content */}
//       <div className='relative z-10 flex flex-col items-center gap-3'>
//         <img 
//           src={team.image} 
//           alt={team.name} 
//           className='w-16 h-16 rounded-full object-cover transition-transform duration-500 group-hover:scale-110'
//         />
//         <h3 className='font-bold text-sm text-[#38b6ff]'>{team.name}</h3>
//         <p className='text-xs text-gray-700 dark:text-gray-300 opacity-80'>{team.title}</p>
//     </div>
//     </motion.div>
//   )
// }

// const Teams = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 text-white '
//   >
//       {/* ✅ MODIFICATION: Replaced <Title /> component to insert divider */}
//       <h2 className='
//    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center bg-gradient-to-r from-[#38b6ff] to-[#000433] bg-clip-text text-transparent animate-gradient
//   '>
//       Meet the team
//     </h2>
//       {/* ✅ ADDED: Accent Divider */}
//       <AccentDivider />

//       {/* ✅ ADDED: Description text from the original <Title /> component */}
//       <p className="text-center text-gray-400 max-w-xl mb-8">
//         A passionate team of digital experts dedicated to your brand’s success.
//       </p>
//       {/* END MODIFICATION */}

//       <div className='grid grid-cols-2 md:grid-cols-3  xl:grid-cols-3 gap-5 w-full'>
//         {teamData.map((team, index) => (
//           <TeamCard key={index} team={team} index={index} />
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// export default Teams