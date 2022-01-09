import React, { useRef } from "react";
import useTfClassify from "../utilis/hooks/useTfClassify";

export default function Tensorflow() {
  const imageRef = useRef();
  const { predict, predictions, isLoading } = useTfClassify();

  //const mobilenet = require("@tensorflow-models/mobilenet");

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <h1 className="text-center text-3xl font-semi-bold my-14">
          Tensorflow Example
        </h1>
        <img
          src="https://images.unsplash.com/photo-1641677317132-045e9e367d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODQyMTd8MHwxfGFsbHw5fHx8fHx8Mnx8MTY0MTcyMjg1NA&ixlib=rb-1.2.1&q=80&w=1080"
          ref={imageRef}
          width="300"
          crossOrigin="anonymous"
          className="m-auto"
        />
        <div className="text-center">
          {predictions.length > 0 && (
            <div>
              {predictions.map((prediction) => (
                <div className="flex justify-between">
                  <p>{prediction.className}</p>
                  <p>{Math.floor(prediction.probability * 100)}%</p>
                </div>
              ))}
            </div>
          )}
          <button
            className="p-3 rounded bg-blue-600 text-white my-5 w-64"
            onClick={() => predict(imageRef.current)}
          >
            {isLoading && "⌛"}
            {!isLoading && "Predict Result"}
          </button>
        </div>
      </div>
    </div>
  );
}
