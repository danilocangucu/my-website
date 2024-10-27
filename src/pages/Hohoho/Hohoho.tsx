import React from "react";
import { useResizeHandler } from "../../hooks/useResizeHandler";
import { useSnowFlakeAnimation } from "../../hooks/useSnowFlakesAnimation";
import { createSnowFlakes, snowFlakesUrls, SnowFlakes } from "../../utils/HohohoUtils";

const Hohoho: React.FC = () => {
    const { maxHeight, maxWidth } = useResizeHandler(window.innerHeight, window.innerWidth);
    // TODO temporary console.log
    console.log("maxWidth", maxWidth);
    console.log("maxHeight", maxHeight);

    // TODO snowflakes should be svgs, now they are pngs
    // TODO amount of snowflakes to be created should vary according to the screen's width
    // TODO styles of margin between snow flakes should also be dinamically set
    const heavySnowFlakes = createSnowFlakes({ snowFlake: SnowFlakes.heavy, amount: 20, url: snowFlakesUrls.heavy });
    const mediumSnowFlakes = createSnowFlakes({ snowFlake: SnowFlakes.medium, amount: 40, url: snowFlakesUrls.medium });
    const lightSnowFlakes = createSnowFlakes({ snowFlake: SnowFlakes.light, amount: 60, url: snowFlakesUrls.light });

    useSnowFlakeAnimation(maxHeight)

    return (
        <>
            <div className="bodySnowFlakes">
                <div className="snowFlakes">
                    <div className="heavySnowFlakes">{heavySnowFlakes}</div>
                    <div className="mediumSnowFlakes">{mediumSnowFlakes}</div>
                    <div className="lightSnowFlakes">{lightSnowFlakes}</div>
                </div>
            </div>
        </>);
};

export default Hohoho;