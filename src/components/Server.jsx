/* eslint-disable react/prop-types */
import { FaServer } from "react-icons/fa6";
import { motion } from "framer-motion";

const Server = ({ loading, duration }) => {
  return (
    <div className="server">
      <FaServer className="icon" />
      <h3 style={{ marginTop: "0" }}>Server</h3>
      {loading && (
        <motion.div
          className="data-sent box"
          initial={{ x: 0 }}
          animate={{ x: -670 }}
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

export default Server;
