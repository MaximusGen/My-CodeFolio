import { motion } from "framer-motion";

const HoverTextH1 = ({ line, colorLetter }) => {
  const text = line;
  const maj = colorLetter

  const spanVariants = {
    visible: {
      y: 0,
      scaleY: 1,
    },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
      color: "var(--color-font-third)",
    },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const items = {
    visible: {
      opacity: 1,
      y: [-1, 1.9, -2.7, 1],
      saleY: [1, 1.3, 0.8, 1],
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.h1 variants={list} initial="hidden" animate="visible">
      {text.split("").map((letter, id) => {
        if (letter === "P" ) {
            return (
              <motion.span  key={id} variants={items}>
                <motion.span
                  key={id}
                  style={{ color: "var(--color-font-third)", fontSize: "11rem", textShadow: "20px 0 0 #fff" }}
                >
                  {letter}
                </motion.span>
              </motion.span>
            );
        } if(letter === "M") {
            return (
                <motion.span  key={id} variants={items}>
                  <motion.span
                    key={id}
                    style={{ color: "var(--color-font-third)", fontSize: "11rem", textShadow: "-20px 0 0 #fff" }}
                  >
                    {letter}
                  </motion.span>
                </motion.span>
              );
        }
        else {
            return (
              <motion.span  key={id} variants={items}>
                <motion.span
                  key={id}
                  variants={spanVariants}
                  initial="visible"
                  whileHover="hover"
                >
                  {letter}
                </motion.span>
              </motion.span>
            );
        }
      })}
    </motion.h1>
  );
};

export default HoverTextH1;
