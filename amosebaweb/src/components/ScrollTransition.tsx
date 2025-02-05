// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { logo } from "../assets/index";

// interface ScrollTransitionProps {
//   effect?: "rotate";
// }

// export default function ScrollTransition({ effect }: ScrollTransitionProps): JSX.Element | null {
//   const [showTransition, setShowTransition] = useState<boolean>(false);
//   const [hideTransition, setHideTransition] = useState<boolean>(false);
//   const [rotation, setRotation] = useState<number>(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;

//       if (scrollY > 10 && !showTransition) {
//         setShowTransition(true);
//       }

//       if (showTransition && scrollY <= 300) {
//         setRotation(scrollY * 2); // Hace girar el logo mientras scrolleas
//       }

//       if (scrollY > 600) {
//         setHideTransition(true); // Se oculta después de cierto scroll
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [showTransition]);

//   if (!showTransition || hideTransition) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed inset-0 bg-[#CAC792] flex items-center justify-center z-50"
//     >
//       <motion.img
//         src={logo}
//         alt="Logo"
//         animate={{ rotate: effect === "rotate" ? rotation : 360 }}
//         transition={{ duration: 5, ease: "linear" }}
//         className="w-32 h-32"
//       />
//     </motion.div>
//   );
// }

