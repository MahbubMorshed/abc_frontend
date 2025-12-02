import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const GlassContactPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden py-20">
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl font-bold text-white text-center drop-shadow-lg"
        >
          Contact Us
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-gray-300 max-w-3xl mx-auto mt-4 mb-16"
        >
          For any queries regarding the 4A Journal or ABC Journals, our team is
          here to help.
        </motion.p>

        {/* TWO CONTACT GLASS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* iPAS Block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              bg-white/10 backdrop-blur-xl rounded-2xl 
              border border-white/20 shadow-2xl p-8
              hover:bg-white/20 transition-all duration-300
            "
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              Institute of Professional Advancement Studies (iPAS)
            </h2>

            <p className="text-gray-300 mb-5">
              For any queries regarding the 4A Journal, please contact the new
              publisher.
            </p>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-300 mt-1" />
                <p className="text-gray-200">
                  Flat # 3/A, House # 12/Cha/D/2
                  <br />
                  Road # 4, Shyamoli
                  <br />
                  Dhaka - 1207, Bangladesh
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-300" />
                <p className="text-gray-200">+88-01976637271</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-300" />
                <a
                  href="mailto:info.ipasbd@gmail.com"
                  className="text-blue-300 hover:underline"
                >
                  info.ipasbd@gmail.com
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-blue-300" />
                <a
                  href="https://i-pas.weebly.com/"
                  target="_blank"
                  className="text-blue-300 hover:underline"
                >
                  https://i-pas.weebly.com/
                </a>
              </div>
            </div>
          </motion.div>

          {/* ABC Journals Block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              bg-white/10 backdrop-blur-xl rounded-2xl 
              border border-white/20 shadow-2xl p-8
              hover:bg-white/20 transition-all duration-300
            "
          >
            <h2 className="text-2xl font-bold text-white mb-3">ABC Journals</h2>

            <p className="text-gray-300 mb-5">
              We thank our readers, authors, and reviewers for continuous
              support.
            </p>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-purple-300 mt-1" />
                <p className="text-gray-200">
                  10-B-6, Darussalam Tower
                  <br />
                  Mirpur Road, Dhaka-1216
                  <br />
                  Bangladesh
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-purple-300" />
                <p className="text-gray-200">+8801672551064</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-purple-300" />
                <a
                  href="mailto:office@abc.us.org"
                  className="text-purple-300 hover:underline"
                >
                  office@abc.us.org
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-purple-300" />
                <a
                  href="https://abc.us.org/ojs/"
                  target="_blank"
                  className="text-purple-300 hover:underline"
                >
                  https://abc.us.org/ojs/
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-3">
            Need More Assistance?
          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Our support team responds within 24 hours. Feel free to reach out
            anytime for help with publications, conferences, or general
            inquiries.
          </p>

          <a
            href="mailto:office@abc.us.org"
            className="
              inline-block bg-white/20 backdrop-blur-xl 
              px-10 py-3 rounded-xl text-white font-semibold 
              hover:bg-white/30 shadow-xl transition
            "
          >
            Send a Message
          </a>
        </motion.div>

        {/* Glass Map Placeholder */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            w-full h-80 mt-20 
            bg-white/10 backdrop-blur-xl rounded-2xl 
            border border-white/20 shadow-2xl 
            flex items-center justify-center text-gray-300
          "
        >
          Google Map Coming Soon…
        </motion.div> */}
      </div>
    </div>
  );
};

export default GlassContactPage;
