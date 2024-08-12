import { motion } from "framer-motion";
import { State } from "../hooks/useEngine";
import { formatPercentage } from "../utils/helpers";

const Result = ({
  state,
  errors,
  accuracyPercentage,
  total,
  wpms,
  className,
}: {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  wpms: number;
  className?: string;
}) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  if (state !== "finish") {
    return null;
  }
  return (
    <motion.ul
      className={`flex flex-col items-center text-teal-400 space-y-3 ${className}`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 2.0 }}
        className="text-rose-500 text-3xl font-semibold"
      >
        {wpms} WPM
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
        className="text-yellow-400"
      >
        Accuracy : {formatPercentage(accuracyPercentage)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
        className="text-red-500"
      >
        Errors : {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.5 }}
        className="text-teal-500"
      >
        Typed : {total}
      </motion.li>
    </motion.ul>
  );
};

export default Result;
