import React from "react";
import gsap from "gsap";
import { SnowFlake, SnowflakeAmount, SnowFlakeWeight } from "../types/HohohoTypes";

const BASE_URL = "https://danilocangucu.net/my-website/assets/hohoho/";

const HEAVY_SNOW_FLAKE_URL = `${BASE_URL}snow1.png`;
const MEDIUM_SNOW_FLAKE_URL = `${BASE_URL}snow2.png`;
const LIGHT_SNOW_FLAKE_URL = `${BASE_URL}snow3.png`;

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
  const endOfScreen = maxHeight * 1.2 + 80;

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

// TODO debug: why animations are buggy when restarting?
// TODO there are no bugs when the animations are started for the first time
// TODO should all the divs be removed and recreated?
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
  lightSnowFlakesRow: NodeListOf<Element>,
  fadeDuration: number,
  startAnimations: () => void
) => {
  await Promise.all([
    fadeOutSnowFlakes(heavySnowFlakesRow, fadeDuration),
    fadeOutSnowFlakes(mediumSnowFlakesRow, fadeDuration),
    fadeOutSnowFlakes(lightSnowFlakesRow, fadeDuration),
  ]);

  gsap.killTweensOf(heavySnowFlakesRow);
  gsap.killTweensOf(mediumSnowFlakesRow);
  gsap.killTweensOf(lightSnowFlakesRow);
  startAnimations();
};

export const SnowFlakes: Record<SnowFlakeWeight, SnowFlake> = {
  heavy: { name: "heavy", url: HEAVY_SNOW_FLAKE_URL },
  medium: { name: "medium", url: MEDIUM_SNOW_FLAKE_URL },
  light: { name: "light", url: LIGHT_SNOW_FLAKE_URL },
};

export const calculateSnowflakeAmount = (
  maxHeight: number,
  maxWidth: number
): SnowflakeAmount => {
  const screenArea = maxWidth * maxHeight;

  // Densities define the amount of snowflakes per pixel that will be rendered on the screen.
  // The heavier the snowflake, the less dense it is, resulting in fewer heavy snowflakes compared to lighter ones.
  const heavyDensity = 0.000006;
  const mediumDensity = 0.000009;
  const lightDensity = 0.000014;

  const heavy = Math.round(screenArea * heavyDensity);
  const medium = Math.round(screenArea * mediumDensity);
  const light = Math.round(screenArea * lightDensity);

  return { heavy, medium, light };
};

const createDivsForSpecificSnowflake = (snowflake: SnowFlake, amount: number) => {
  const classNameAndKey = `${snowflake.name}SnowFlakes`;
  const snowflakeDivs = Array.from({ length: amount }).map((_, index) => (
    <div
      className={`snowFlake ${classNameAndKey} ${classNameAndKey}-container`}
      key={`${snowflake.name}-flake-${index}`}
    >
      <img
        src={snowflake.url}
        alt={`${snowflake.name} snowflake`}
      />
    </div>
  ));

  return (
    <div
      className={`${classNameAndKey} snowflakes-grid-base`}
      key={classNameAndKey}
    >
      {snowflakeDivs}
    </div>);
};

export const createAllSnowflakeDivs = (snowflakesAmount: SnowflakeAmount) => {
  return (
    <div className="snowFlakes" key="snowflakes">
      {Object.entries(SnowFlakes).map(([key, snowflake]) => {
        const amount = snowflakesAmount[key as SnowFlakeWeight];
        return createDivsForSpecificSnowflake(snowflake, amount);
      })}
    </div>
  );
};