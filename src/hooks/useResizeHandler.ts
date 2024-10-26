import { useState, useEffect } from "react";

type Dimensions = {
  heights: Set<number>;
  widths: Set<number>;
};

const RESIZE_COUNT_LIMIT = 5;

export const useResizeHandler = (initialHeight: number) => {
  const [maxHeight, setMaxHeight] = useState(initialHeight);
  const [uniqueDimensions, setUniqueDimensions] = useState<Dimensions>({
    heights: new Set(),
    widths: new Set(),
  });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;

      setMaxHeight((prevHeight) => Math.max(prevHeight, currentHeight));

      if (!isDesktop) {
        setUniqueDimensions((prevDimensions) => ({
          heights: new Set(prevDimensions.heights).add(currentHeight),
          widths: new Set(prevDimensions.widths).add(currentWidth),
        }));

        if (
          uniqueDimensions.heights.size > RESIZE_COUNT_LIMIT ||
          uniqueDimensions.widths.size > RESIZE_COUNT_LIMIT
        ) {
          setIsDesktop(true);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop, uniqueDimensions]);

  return { maxHeight, isDesktop };
};
