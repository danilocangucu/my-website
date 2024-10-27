import React from "react";

import { useResizeHandler } from "../../hooks/useResizeHandler";
import { useSnowFlakeAnimation } from "../../hooks/useSnowFlakesAnimation";
import { calculateSnowflakeAmount, createAllSnowflakeDivs } from "../../utils/HohohoUtils";

const Hohoho: React.FC = () => {
    const { currentHeight, currentWidth } = useResizeHandler(window.innerHeight, window.innerWidth);
    const snowflakesAmount = calculateSnowflakeAmount(currentHeight, currentWidth);

    // TODO snowflakes should be svgs, now they are pngs
    // TODO styles of margin between snow flakes should also be dinamically set
    const createdSnowflakesDivs = createAllSnowflakeDivs(snowflakesAmount);

    // TODO useSnowFlakeAnimation should also be called with currentWidth
    useSnowFlakeAnimation(currentHeight)

    return (
        <div className="bodySnowFlakes">
            {createdSnowflakesDivs}
        </div>
    );
};

export default Hohoho;