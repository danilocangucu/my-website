import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useTranslation } from 'react-i18next';

import locationData from './location.json'
import { getRandomColor } from '../../../../utils/StatisticsUtils';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Location = () => {
    interface ChartData {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string;
        }[];
    }

    const [chartData, setChartData] = useState<ChartData | null>(null);

    const { t } = useTranslation("hohoho/results-page");

    useEffect(() => {
        const groupCitiesByCountry = (data: any[]) => {
            const countries = data.map((item) => item.country);
            const allCities = data.flatMap((item) => item.cities.map((city: any) => city.name));

            const uniqueCities = [...new Set(allCities)];

            const datasets = uniqueCities.map((city) => {
                return {
                    label: t(`statistics-label-city-${city}`, { defaultValue: city }),
                    data: countries.map((country) => {
                        const countryData = data.find((item) => item.country === country);
                        if (countryData) {
                            const cityData = countryData.cities.find((c: any) => c.name === city);
                            return cityData?.visitors || 0;
                        }
                        return 0;
                    }),
                    backgroundColor: getRandomColor(),
                };
            });

            return {
                labels: countries.map((country) =>
                    t(`statistics-label-country-${country}`, { defaultValue: country })
                ),
                datasets,
            };
        };

        const transformedData = groupCitiesByCountry(locationData);
        setChartData(transformedData);
    }, [t]);

    if (!chartData) {
        return <p>{t("loading-chart", { defaultValue: "Loading chart..." })}</p>;
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default Location;
