import { useState, useEffect } from "react";

export const useResizeHandler = (
  initialHeight: number,
  innitialWidth: number
) => {
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const [currentWidth, setCurrentWidth] = useState(innitialWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentHeight(window.innerHeight);
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { currentHeight, currentWidth };
};
