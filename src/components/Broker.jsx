/* eslint-disable react/prop-types */
import { FaNetworkWired } from "react-icons/fa";
import { motion } from "framer-motion";

const Broker = ({ loading, duration }) => {
  return (
    <div className="broker" style={{ alignSelf: "center" }}>
      <FaNetworkWired className="icon" />
      <h3 style={{ marginTop: "0" }}>Broker</h3>
      {loading && (
        <motion.div
          className="data-sent box"
          initial={{ x: 0, y: 0 }}
          animate={{ x: 300, y: -180 }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          Data
        </motion.div>
      )}
      {loading && (
        <motion.div
          className="data-sent box"
          initial={{ x: 0, y: 0 }}
          animate={{ x: 300, y: 0 }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          Data
        </motion.div>
      )}
      {loading && (
        <motion.div
          className="data-sent box"
          initial={{ x: 0, y: 0 }}
          animate={{ x: 300, y: 180 }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          Data
        </motion.div>
      )}
    </div>
  );
};

export default Broker;
