import {motion} from 'framer-motion'


const HoverTextH2 = ({line}) => {

    const text = line


  const spanVariants = {
    visible: {
      y: 0,
      scaleY: 1,
    },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
      color: "var(--background-nav)",
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
        <motion.h2
        variants={list}
        initial="hidden"
        animate="visible"
        >
              {text.split("").map((letter, id) => (
            <motion.span variants={items}>
              <motion.span
                key={id}
                variants={spanVariants}
                initial="visible"
                whileHover="hover"
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}

        </motion.h2>
    )
}

export default HoverTextH2