import React from "react";
import gsap from "gsap";

const HEAVY_SNOW_FLAKE_URL = "https://danilocangucu.net/certificates/snow1.png";
const MEDIUM_SNOW_FLAKE_URL =
  "https://danilocangucu.net/certificates/snow2.png";
const LIGHT_SNOW_FLAKE_URL = "https://danilocangucu.net/certificates/snow3.png"

export const snowFlakesUrls = {
  heavy: HEAVY_SNOW_FLAKE_URL,
  medium: MEDIUM_SNOW_FLAKE_URL,
  light: LIGHT_SNOW_FLAKE_URL
};

// TODO startSnowFlakes should also receive maxWidth
export const startSnowFlakes = (
  snowFlake: gsap.TweenTarget,
  minDuration: number,
  maxDuration: number,
  maxHeight: number
) => {
  if (!snowFlake) return;

  let xOffset = 0;
  const eases = ["power1", "power2", "power3", "power4"];
  const endOfScreen = maxHeight * 2 + 300;

  const animateCycle = () => {
    const randomDuration =
      Math.random() * (maxDuration - minDuration) + minDuration;
    const randomEase = eases[Math.floor(Math.random() * eases.length)];

    gsap.to(snowFlake, {
      duration: randomDuration,
      y: endOfScreen,
      rotate: 360,
      ease: `${randomEase}.out`,
      delay: Math.random() * randomDuration,
      x: `${xOffset}`,
      modifiers: {
        x: gsap.utils.unitize((x) => Math.sin(x / 50) * 50 + x),
      },
      onComplete: () => {
        gsap.set(snowFlake, { y: 0, yPercent: 0, rotate: 0 });
        // TODO include check for light snowflakes
        if ((snowFlake as Element).closest(".mediumSnowFlakes")) {
          // TODO offsets should take maxWidth into account
          xOffset =
            (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 100 + 100);
        } else {
          xOffset = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 50 + 50);
        }
        animateCycle();
      },
    });
  };

  animateCycle();
};

export const fadeOutSnowFlakes = (
  snowFlakesRow: NodeListOf<Element>,
  duration: number
): Promise<void> => {
  return new Promise<void>((resolve) => {
    let completed = 0;
    snowFlakesRow.forEach((snowFlake) => {
      gsap.to(snowFlake, {
        opacity: 0,
        duration: duration,
        onComplete: () => {
          gsap.set(snowFlake, { y: 0, opacity: 1 });
          completed += 1;
          if (completed === snowFlakesRow.length) resolve();
        },
      });
    });
  });
};

export const fadeOutAndRestartAnimations = async (
  heavySnowFlakesRow: NodeListOf<Element>,
  mediumSnowFlakesRow: NodeListOf<Element>,
  fadeDuration: number,
  startAnimations: () => void
) => {
  await Promise.all([
    fadeOutSnowFlakes(heavySnowFlakesRow, fadeDuration),
    fadeOutSnowFlakes(mediumSnowFlakesRow, fadeDuration),
  ]);

  gsap.killTweensOf(heavySnowFlakesRow);
  gsap.killTweensOf(mediumSnowFlakesRow);
  startAnimations();
};

export type SnowFlakeWeight = 'heavy' | 'medium' | 'light';

export interface SnowFlake {
  name: SnowFlakeWeight;
  size: number;
}

export const SnowFlakes: Record<SnowFlakeWeight, SnowFlake> = {
  heavy: { name: "heavy", size: 80 },
  medium: { name: "medium", size: 50 },
  light: { name: "light", size: 30 },
};

export interface SnowFlakeProps {
  snowFlake: SnowFlake;
  amount: number;
  url: string;
}

export const createSnowFlakes = ({ snowFlake, amount, url }: SnowFlakeProps) => {
  return Array.from({ length: amount }).map((_, index) => (
    <div className={`snowFlake ${snowFlake.name}`} key={`${snowFlake.name}-flake-${index}`}>
      <img src={url} alt={`${snowFlake.name} snow flake`} height={snowFlake.size} />
    </div>
  ));
};