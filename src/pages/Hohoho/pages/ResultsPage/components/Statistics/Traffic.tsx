import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import visitorsData from './visitors.json'
import { useTranslation } from 'react-i18next';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Traffic = () => {
    const [chartData, setChartData] = useState<any>(null);

    const { t } = useTranslation("hohoho/results-page");


    const colorSecondary = "#D62839";
    const colorQuaternary = "#ECA72C";

    useEffect(() => {
        const labels = visitorsData.map((entry) => entry.date);
        const visitors = visitorsData.map((entry) => entry.visitors);
        const pageViews = visitorsData.map((entry) => entry.pageviews);

        setChartData({
            labels,
            datasets: [
                {
                    label: t('statistics-label-visitors'),
                    data: visitors,
                    borderColor: colorSecondary,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.4,
                },
                {
                    label: t('statistics-label-pageviews'),
                    data: pageViews,
                    borderColor: colorQuaternary,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.4,
                },
            ],
        });
    }, [t]);

    if (!chartData) {
        return <p>Loading chart...</p>;
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default Traffic;