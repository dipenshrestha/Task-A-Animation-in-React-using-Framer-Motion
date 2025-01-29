import { useState } from "react";
import { motion } from "framer-motion";
import img1 from './assets/first.svg';
import img2 from './assets/second.svg';
import img3 from './assets/third.svg';
import img4 from './assets/fourth.svg';
import { MdArrowForward } from "react-icons/md";

const Card = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cardData = [
    {
      num: 23,
      str1: "All Courses",
      str2: "courses you're powering",
      str3: "through right now"
    },
    {
      num: '05',
      str1: "Upcoming Courses",
      str2: "exciting new courses",
      str3: "waiting to boost your skills." 
    },
    {
      num: 10,
      str1: "Ongoing Courses",
      str2: "currently happening—don’t",
      str3: "miss out on the action!" 
    }
  ];

  const handleCardClick = (cardIndex) => {
    // Prevent deselecting all cards (keep at least one selected)
    if (selectedCard !== cardIndex) {
      setSelectedCard(cardIndex);
    }
  };

  return (
    <div className="card-container">
      {cardData.map((card, cardIndex) => (
        <motion.div
          key={cardIndex}
          onClick={() => handleCardClick(cardIndex)}
          className="card"
          style={{
            width: selectedCard === cardIndex ? "600px" : "300px",
            background: selectedCard === cardIndex ? "#c33241" : "#f9ebec",
            color: selectedCard === cardIndex ? "#f9ebec" : "#c33241",
            display: "grid",
          }}
          transition={{ duration: 0.5 }}
        >
          {selectedCard === cardIndex && (
            <motion.div>
              <motion.span
                className="text"
                initial={{ x: "50%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                View all courses <MdArrowForward className="arrow" />
              </motion.span>

              <motion.div
                className="card-img"
                initial={{ x: selectedCard === cardIndex ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  x: {
                    from: selectedCard === cardIndex ? "-100%" : "100%",
                    to: "0%",
                  },
                }}
              >
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
              </motion.div>
            </motion.div>
          )}

          <motion.div className="info" 
          style={{
            flexDirection: selectedCard === cardIndex || selectedCard === null ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            gap: selectedCard === cardIndex || selectedCard === null ? "10px" : "30px",
            paddingTop: selectedCard === cardIndex || selectedCard === null ? "0px" : "50px",
          }}>
            <motion.h1
              className="number"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ order: selectedCard === cardIndex || selectedCard === null ? 1 : 2 }}
            >
              {card.num}<sup className="plus">+</sup>
            </motion.h1>
            <motion.div
              className="info-1"
              initial={{ rotate: selectedCard === cardIndex ? 0 : -90, y: selectedCard === cardIndex ? 0 : -20 }}
              animate={{
                rotate: selectedCard === cardIndex ? 0 : selectedCard === null ? 0 : -90,
                y: selectedCard === null ? 0 : (selectedCard === cardIndex ? 0 : -20),
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{ order: selectedCard === cardIndex || selectedCard === null ? 2 : 1 }}
            >
              <h1 className="info-first">{card.str1}</h1>
              <span className="info-second">
                {card.str2} <br /> {card.str3}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
