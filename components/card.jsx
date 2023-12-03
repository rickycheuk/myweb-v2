"use client";

import { useEffect, useState } from "react";
import Tilt from "@/components/tilt";
import ReactCardFlip from "react-card-flip";
import * as rdd from "react-device-detect";

const Card = ({ frontComponent, backComponent }) => {
  const [isFlipped, setFlip] = useState(false);

  useEffect(() => {
    const flipToTrueTimeout = setTimeout(() => {
      setFlip(true);

      const flipToFalseTimeout = setTimeout(() => {
        setFlip(false);
      }, 500);

      return () => clearTimeout(flipToFalseTimeout);
    }, 500);

    return () => clearTimeout(flipToTrueTimeout);
  }, []);

  const flipCard = () => {
    setFlip(!isFlipped);
  };

  return (
    <>
      {rdd.isIOS ? (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div onClick={flipCard}>
            <div className="rounded-[36px] w-full h-full cursor-pointer" key="front">
              {cardFaces.front}
            </div>
          </div>

          <div onClick={flipCard}>
            <div className="rounded-[36px] w-full h-full cursor-pointer" key="back">
              {cardFaces.back}
            </div>
          </div>
        </ReactCardFlip>
      ) : (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div onClick={flipCard}>
            <Tilt
              options={{ glare: true, "max-glare": 0.42, perspective: 690 }}
              className="rounded-[36px] w-full h-full cursor-pointer"
            >
              <div className="w-full h-full" key="front">
                {frontComponent}
              </div>
            </Tilt>
          </div>
          <div onClick={flipCard}>
            <Tilt
              options={{ glare: true, "max-glare": 0.42, perspective: 690 }}
              className="rounded-[36px] w-full h-full cursor-pointer"
            >
              <div className="w-full h-full" key="back">
                {backComponent}
              </div>
            </Tilt>
          </div>
        </ReactCardFlip>
      )}
    </>
  );
};

export default Card;
