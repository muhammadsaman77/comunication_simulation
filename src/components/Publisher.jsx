/* eslint-disable react/prop-types */
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
const Publisher = ({ loading, duration }) => {
  return (
    <div className="publisher" style={{ alignSelf: "center" }}>
      <FaPaperPlane className="icon" />
      <h3 style={{ marginTop: "0" }}>Publisher</h3>
      {loading && (
        <motion.div
          className="data-sent box"
          initial={{ x: 0 }}
          animate={{ x: 300 }}
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
export default Publisher;
