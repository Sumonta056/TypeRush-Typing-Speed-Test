import { motion } from "framer-motion";

const Caret = () => {
  return (
    <motion.div
      aria-hidden={true}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      className="inline-block w-0.5 h-8 bg-primary"
    />
  );
};

export default Caret;
