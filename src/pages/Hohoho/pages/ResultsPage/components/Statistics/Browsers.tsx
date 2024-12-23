import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

import { getRandomColor } from '../../../../utils/StatisticsUtils';
import browserData from './browsers.json';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BrowserUsage = () => {
    const { t } = useTranslation('hohoho/results-page');
    const [chartData, setChartData] = useState<any>(null);
    const [options, setOptions] = useState<any>(null);

    useEffect(() => {
        const datasets = browserData.map((entry) => ({
            label: entry.name,
            data: [entry.visitors],
            backgroundColor: getRandomColor(),
            borderWidth: 1,
        }));

        const totalVisitors = browserData.reduce((sum, entry) => sum + entry.visitors, 0);

        setChartData({
            labels: [''],
            datasets: datasets,
        });

        setOptions({
            responsive: true,
            indexAxis: 'y' as const,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (tooltipItem: any) => {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} visitors`;
                        },
                    },
                },
                legend: {
                    position: 'top' as const,
                },
            },
            scales: {
                x: {
                    stacked: true,
                    max: totalVisitors,
                },
                y: {
                    stacked: true,
                },
            },
        });
    }, [t]);

    if (!chartData || !options) {
        return <p>{t('loading-chart', { defaultValue: 'Loading chart...' })}</p>;
    }

    return (
        <Bar data={chartData} options={options} />
    );
};

export default BrowserUsage;
