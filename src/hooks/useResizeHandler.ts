import { useState, useEffect } from "react";

export const useResizeHandler = (
  initialHeight: number,
  innitialWidth: number
) => {
  const [maxHeight, setMaxHeight] = useState(initialHeight);
  const [maxWidth, setMaxWidth] = useState(innitialWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;

      setMaxHeight((prevHeight) => Math.max(prevHeight, currentHeight));
      setMaxWidth((prevWidth) => Math.max(prevWidth, currentWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { maxHeight, maxWidth };
};
