import abc from "../assets/abc.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      {/* 🌌 Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-bg"></div>
      </div>

      {/* Floating Blur Orbs */}
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Glass Container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl 
                     rounded-3xl p-10 md:p-14 mx-auto flex flex-col items-center text-center"
        >
          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="w-full flex justify-center mb-10"
          >
            <img
              src={abc}
              alt="ABC Research"
              className="w-full max-w-2xl h-[260px] md:h-[350px] object-cover rounded-2xl shadow-xl border border-white/20"
            />
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl"
          >
            Save time with a trusted global research house
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6"
          >
            Asian Business Consortium (ABC) empowers researchers, scholars, and
            organizations with reliable research, training, publishing, and
            digital library services across Bangladesh and Malaysia.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-5 mt-10"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Explore Services
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-white/20 backdrop-blur-xl 
                         text-white font-semibold border border-white/20 
                         hover:bg-white/30 transition"
            >
              Contact ABC
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// import abc from "../assets/abc.jpg";

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.25,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.85, y: -20 },
//     show: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="w-full bg-white overflow-hidden">
//       <motion.div
//         className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center"
//         initial="hidden"
//         animate="show"
//         variants={containerVariants}
//       >
//         {/* ---- IMAGE ---- */}
//         <motion.div
//           variants={imageVariants}
//           className="w-full flex justify-center mb-10"
//         >
//           <img
//             src={abc}
//             alt="ABC Research"
//             className="w-full max-w-xl rounded-2xl shadow-xl object-cover"
//           />
//         </motion.div>

//         {/* ---- TEXT ---- */}
//         <motion.div variants={itemVariants} className="text-center space-y-6">
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
//           >
//             Save time with a trusted global research house
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Asian Business Consortium (ABC) empowers researchers, scholars, and
//             organizations with reliable research, training, publishing, and
//             digital library services across Bangladesh and Malaysia.
//           </motion.p>
//         </motion.div>

//         {/* ---- BUTTONS ---- */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row gap-4 mt-8"
//         >
//           <motion.a
//             whileHover={{ scale: 1.08, y: -3 }}
//             whileTap={{ scale: 0.96 }}
//             href="#services"
//             className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
//           >
//             Explore Services
//           </motion.a>

//           <motion.a
//             whileHover={{ scale: 1.05, y: -3 }}
//             whileTap={{ scale: 0.96 }}
//             href="#contact"
//             className="px-7 py-3 border border-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition"
//           >
//             Contact ABC
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
