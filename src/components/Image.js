import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useTfClassify from "../utilis/hooks/useTfClassify";

function Image({ image, index, handleRemove }) {
  const [isHovering, setIsHovering] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const imageRef = useRef();
  const { predict, predictions, setPredictions, isLoading } = useTfClassify();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {(predictions.length > 0 || isLoading) && (
        <span
          className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
          onClick={() => setPredictions([])}
        >
          {isLoading && <p>Fetching results...</p>}
          {predictions.map((prediction) => (
            <div className="flex justify-between text-sm">
              <p>{prediction.className}</p>
              <p>{Math.floor(prediction.probability * 100)} %</p>
            </div>
          ))}
        </span>
      )}
      <i
        className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? "" : "hidden"
        }`}
        onClick={() => handleRemove(index)}
      ></i>
      <i
        className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 ${
          isHovering ? "" : "hidden"
        }`}
        onClick={() => predict(imageRef.current)}
      ></i>
      <img
        alt=""
        src={image}
        className="object-contain w-full"
        key={index}
        onClick={() => setShowPreview(true)}
        ref={imageRef}
        crossOrigin="anonymous"
      />
      <AnimatePresence>
        {showPreview && (
          <motion.section
            layoutId={showPreview}
            className="fixed w-full h-full flex justify-center items-center left-0 top-0 z-40"
            onClick={() => setShowPreview(false)}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white">
              <img
                alt=""
                src={image}
                // className="object-contain w-100"
                width="450"
                height="auto"
                key={index}
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Image;
