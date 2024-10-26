import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  startSnowFlakes,
  fadeOutAndRestartAnimations,
} from "../utils/HohohoUtils";

export const useSnowFlakeAnimation = (maxHeight: number) => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    const heavySnowFlakesRow = document.querySelectorAll(
      ".heavySnowFlakes .snowFlake"
    );
    const mediumSnowFlakesRow = document.querySelectorAll(
      ".mediumSnowFlakes .snowFlake"
    );
    const lightSnowFlakesRow = document.querySelectorAll(
      ".lightSnowFlakes .snowFlake"
    );

    const startAnimations = () => {
      heavySnowFlakesRow.forEach((snowFlake) =>
        startSnowFlakes(snowFlake, 15, 20, maxHeight)
      );
      mediumSnowFlakesRow.forEach((snowFlake) =>
        startSnowFlakes(snowFlake, 10, 13, maxHeight)
      );
      lightSnowFlakesRow.forEach((snowFlake) =>
        startSnowFlakes(snowFlake, 5, 8, maxHeight)
      );
    };

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      startAnimations();
    } else {
      fadeOutAndRestartAnimations(
        heavySnowFlakesRow,
        mediumSnowFlakesRow,
        0.2,
        startAnimations
      );
    }

    return () => {
      gsap.killTweensOf(heavySnowFlakesRow);
      gsap.killTweensOf(mediumSnowFlakesRow);
    };
  }, [maxHeight]);
};
