import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "14+", label: "Years of Service" },
    { value: "50K+", label: "Researchers Served" },
    { value: "200+", label: "Published Journals" },
    { value: "15+", label: "Global Conferences" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden">
      {/* Glowing Background Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* ⭐ STATS SECTION */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-14"
        >
          Our Impact in Numbers
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
                bg-white/10 backdrop-blur-xl 
                border border-white/20 
                rounded-2xl p-8 shadow-xl
                hover:bg-white/20 hover:shadow-2xl
                transition-all duration-300
              "
            >
              <h3 className="text-4xl font-extrabold text-blue-300">
                {s.value}
              </h3>
              <p className="mt-2 text-gray-200 text-lg">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ⭐ CTA SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Collaborate?
          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join ABC to access world-class research opportunities, publishing
            support, and professional academic development.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block 
              px-10 py-3 
              bg-white/20 
              backdrop-blur-xl 
              text-white font-semibold 
              rounded-xl 
              border border-white/30
              hover:bg-white/30
              shadow-xl transition
            "
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
