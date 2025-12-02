import { motion } from "framer-motion";
import { useEffect } from "react";
import abc from "../assets/abc.jpg";

export default function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatImage = {
    animate: {
      y: [0, -12, 0],
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
    },
  };

  return (
    <section id="about" className="w-full bg-gray-50 py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT Image */}
        <motion.div variants={item} className="flex justify-center">
          <motion.img
            variants={floatImage}
            animate="animate"
            src={abc}
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT Text */}
        <motion.div variants={item} className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">About ABC</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Asian Business Consortium (ABC) is a global research, training,
            publishing, and digital library service house supporting scholars
            and organizations across Bangladesh and Malaysia.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Established in 2010, ABC nurtures young researchers, empowers
            academics, and supports innovative thinkers through high-quality
            journals, conferences, workshops, and training programs.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
