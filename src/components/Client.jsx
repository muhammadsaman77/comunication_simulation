/* eslint-disable react/prop-types */
import { FaRegUser } from "react-icons/fa6";
import { motion } from "framer-motion";
const Client = ({ loading, duration }) => {
  return (
    <div className="client">
      <FaRegUser className="icon" />

      <h3 style={{ marginTop: "0" }}>Client</h3>
      {loading && (
        <motion.div
          className="data-sent box"
          initial={{ x: 0 }}
          animate={{ x: 650 }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          Request
        </motion.div>
      )}
    </div>
  );
};

export default Client;
