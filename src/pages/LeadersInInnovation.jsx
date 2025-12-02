import React from "react";
import { motion } from "framer-motion";

const LeadersInInnovation = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.2 },
    }),
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 text-center mb-4"
        >
          We are the Leaders in Innovation
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Here are the three little things that make us special
        </motion.p>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* ---------- CARD 1 ---------- */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg mb-6"></div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Principles of our Business
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>
                • Objective: overcome problems in higher education & research —
                not profit maximization.
              </li>
              <li>
                • Investors only get back the investment amount; no extra
                dividend.
              </li>
              <li>
                • After refund, profit remains for expansion & improvement.
              </li>
              <li>• Environmentally conscious and gender sensitive.</li>
              <li>
                • Workforce receives market wage with improved conditions.
              </li>
            </ul>
          </motion.div>

          {/* ---------- CARD 2 ---------- */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
          >
            <div className="w-full h-48 bg-gradient-to-r from-purple-300 to-purple-500 rounded-lg mb-6"></div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Social Business Model
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>
                • Investment provided by Founder Life Members for social
                business.
              </li>
              <li>
                • Profits from ABC Journals allow expansion & wider reach.
              </li>
              <li>
                • ABC returns the investment money to the founder members.
              </li>
              <li>
                • Achieve development goals & reduce problems in higher
                education.
              </li>
              <li>
                • Focus on improving research, publication & technology access.
              </li>
            </ul>
          </motion.div>

          {/* ---------- CARD 3 ---------- */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
          >
            <div className="w-full h-48 bg-gradient-to-r from-green-300 to-green-500 rounded-lg mb-6"></div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Commandments
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Encourage meaningful Research & Development.</li>
              <li>• Sponsor high-quality conferences.</li>
              <li>• Ensure peer-reviewed paper selection.</li>
              <li>• Zero tolerance for plagiarism.</li>
              <li>• Publish only original works.</li>
              <li>• Develop new standards & protocols.</li>
              <li>• Innovate better tools & technologies.</li>
              <li>• Transfer knowledge to the public.</li>
              <li>• Act against technical illiteracy.</li>
              <li>• Support the needy with benevolent schemes & projects.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadersInInnovation;
