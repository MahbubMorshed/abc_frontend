import { motion } from "framer-motion";

export default function Footer() {
  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fade}
      className="w-full bg-gray-900 text-gray-300 py-12"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold text-white mb-3">
            ABC Research House
          </h4>
          <p className="text-gray-400">
            A global platform empowering researchers through journals, training,
            conferences, and digital library support.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-semibold text-white mb-3">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold text-white mb-3">Contact</h5>
          <p>Email: office@abc.us.org</p>
          <p className="mt-1">Dhaka, Bangladesh</p>
          <p>Selangor, Malaysia</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Asian Business Consortium (ABC). All Rights
        Reserved.
      </div>
    </motion.footer>
  );
}
