import React, { useState } from "react";
import * as tfjs from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

export default function useTfClassify() {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  function predict(img) {
    setIsLoading(true);
    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(img).then((predictions) => {
        setPredictions(predictions);
        setIsLoading(false);
      });
    });
  }
  return { predict, predictions, setPredictions, isLoading };
}
