import React from "react";
import classNames from 'classnames';

type Year = {
    name: string;
    gridColumn: string;
    borderRadius?: string;
};

const yearsData: Year[] = [
    {
        name: "2024",
        gridColumn: "1 / 8",
        borderRadius: "10px 0 0 0"
    },
    {
        name: "2025",
        gridColumn: "8 / 13",
        borderRadius: "0 10px 0 0"
    }
];

const renderYearsLarge = (years: Year[]) => {
    return years.map((year, index) => {
        const isFirstYear = index === 0;
        const isLastYear = index === years.length - 1;

        return (
            <div
                key={`${year.name}-large-${index}`}
                className={classNames(
                    "row",
                    "year",
                    "border-top",
                    "bg-tertiary",
                    {
                        "border-left": isFirstYear,
                        "border-right": isLastYear,
                        "border-right--dashed": !isLastYear,
                    }
                )}
                style={{
                    gridColumn: year.gridColumn,
                    borderRadius: year.borderRadius,
                }}
            >
                <h2>{year.name}</h2>
            </div>
        )
    });
};

const years = {
    data: yearsData,
    render: renderYearsLarge
};

type Month = {
    name: string;
    gridColumn: string;
};

const monthsData: Month[] = [
    { name: "Nov", gridColumn: "1 / 4" },
    { name: "Dec", gridColumn: "4 / 8" },
    { name: "Jan", gridColumn: "8 / 11" },
    { name: "Feb", gridColumn: "11 / 13" },
];

const renderMonths = (months: Month[]) => {
    return months.map((month, index) => {
        const isFirstMonth = index === 0;
        const isLastMonth = index === months.length - 1;

        return (
            <div
                key={`${month.name}-large-${index}`}
                className={classNames(
                    "row",
                    "month",
                    {
                        "border-left": isFirstMonth,
                        "border-right": isLastMonth,
                        "border-right--dashed": !isLastMonth,
                    }
                )}
                style={{
                    gridColumn: month.gridColumn,
                }}
            >
                {month.name}
            </div>
        )
    });
};

const months = {
    data: monthsData,
    render: renderMonths
}

// TODO for proper react keys, should renderEmptyRowS according to number desired empty rows
export const renderEmptyRow = (months: Month[], isLastRow: boolean) => {
    // TODO temporary const key generated with math.random
    const key = `${Math.random()}`;
    return months.map((month, index) => {
        const isFirstMonth = index === 0;
        const isLastMonth = index === months.length - 1;

        return (
            <div
                key={`emptyrow-${index}-${key}`}
                className={classNames(
                    "empty-row",
                    `-${index}-${key}`,
                    { "empty-row--last": isLastRow },
                    { "empty-row--last--left-radius": isLastRow && isFirstMonth },
                    { "empty-row--last--right-radius": isLastRow && isLastMonth },
                    { "border-left": isFirstMonth },
                    { "border-right": isLastMonth },
                    { "border-right--dashed": !isLastMonth },
                )}
                style={{
                    gridColumn: month.gridColumn,
                }}
            >
            </div>
        )
    });
}

enum DateClass {
    Number = "number",
    Text = "text"
}

type DateType = {
    data: number | string;
    gridColumn: string;
    align: string;
    class: DateClass;
    backgroundColor?: "secondary" | "tertiary" | "quaternary";
};

const datesData: Array<{ [key: string]: DateType[] }> = [
    {
        "Nov": [
            { data: 15, gridColumn: "1 / 3", align: "center", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
        "Dec": [
            { data: 13, gridColumn: "4 / 5", align: "right", class: DateClass.Number, backgroundColor: "secondary" },
            { data: 24, gridColumn: "6 / 7", align: "right", class: DateClass.Number, backgroundColor: "quaternary" },
        ],
    },
    {
        "Nov": [
            { data: "Open for Entries", gridColumn: "1 / 4", align: "center", class: DateClass.Text },
        ],
        "Dec": [
            { data: "Deadline", gridColumn: "4 / 6", align: "center", class: DateClass.Text },
            { data: "Awarded!", gridColumn: "6 / 8", align: "center", class: DateClass.Text },
        ],
        "Jan": [
            { data: 2, gridColumn: "8 / 10", align: "center", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
        "Feb": [
            { data: 13, gridColumn: "11 / 13", align: "center", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
    },
    {
        "Jan": [
            { data: "Site Work Starts", gridColumn: "8 / 11", align: "center", class: DateClass.Text },
        ],
        "Feb": [
            { data: "Site is launched", gridColumn: "11 / 13", align: "center", class: DateClass.Text },
        ],
    },
    {
        "Nov": [
            { data: 25, gridColumn: "3 / 4", align: "left", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
        "Dec": [
            { data: 20, gridColumn: "5 / 7", align: "center", class: DateClass.Number, backgroundColor: "secondary" },
        ],
    },
    {
        "Nov": [
            { data: "Selection Process Starts*", gridColumn: "1 / 4", align: "center", class: DateClass.Text },
        ],
        "Dec": [
            { data: "End of Selection", gridColumn: "4 / 8", align: "center", class: DateClass.Text },
        ],
    },
];

const renderRows = (datesData: Array<{ [key: string]: DateType[] }>, months: Month[]) => {
    return datesData.map((dates, rowIndex) => (
        <React.Fragment key={`row-large-${rowIndex}`}>
            {renderRow(dates, months)}
        </React.Fragment>
    ));
};

const renderRow = (dates: { [key: string]: DateType[] }, months: Month[]) => {
    return months.map((month, monthIndex) => {
        const [startCol, endCol] = month.gridColumn.split(' / ').map(Number);
        const monthDates = dates[month.name] || [];

        const initialColumns = Array.from({ length: endCol - startCol }, (_, i) => ({
            data: "",
            gridColumn: `${startCol + i} / ${startCol + i + 1}`,
            align: "",
            class: DateClass.Number,
        }));

        const transformedColumns = monthDates.reduce<(DateType | null)[]>((cols, date) => {
            const [colStart, colEnd] = date.gridColumn.split(' / ').map(Number);
            const spanLength = colEnd - colStart;

            return cols.map((col, index) => {
                if (index >= colStart - startCol && index < colStart - startCol + spanLength) {
                    return index === colStart - startCol
                        ? {
                            ...date,
                            gridColumn: `${colStart} / ${colEnd}`,
                            align: date.align,
                        }
                        : null;
                }
                return col;
            });
        }, initialColumns);

        return transformedColumns
            .map((col, colIndex) => {
                if (!col) return null;

                const isFirstCol = monthIndex === 0 && colIndex === 0;
                const colEnd = parseInt((col?.gridColumn || '').split(' / ')[1]);

                const lastCol = parseInt(months[months.length - 1].gridColumn.split(' / ')[1]);
                const isLastCol = monthIndex === months.length - 1 && parseInt(col?.gridColumn.split(' / ')[1]) === lastCol;

                const isLastColOfTheMonth = colEnd === endCol;

                return (
                    <div
                        key={`dates-large-${month.name}-${colIndex}`}
                        className={classNames({
                            "row": true,
                            "date": true,
                            [`date-${col.class}`]: true,
                            "border-left": isFirstCol,
                            "border-right": isLastCol,
                            "border-right--dashed": !isLastCol && isLastColOfTheMonth,
                        })}
                        style={{
                            gridColumn: col.gridColumn,
                            textAlign: col.align as React.CSSProperties['textAlign'],
                        }}
                    >
                        {col.data ? (
                            <div className="date">
                                {col.class === DateClass.Number ? (
                                    <div
                                        className={classNames(
                                            "date-circle",
                                            {
                                                [`bg-${col.backgroundColor} border-${col.backgroundColor}`]: col.backgroundColor,
                                            },
                                            `${col.backgroundColor === "quaternary" ? "text-black" : ""}`
                                        )}
                                    >
                                        {col.data}
                                    </div>
                                ) : (
                                    <>{col.data}</>
                                )}
                            </div>
                        ) : null}
                    </div>
                );
            })
            .filter(Boolean);
    });
};

// datesDataSmall is for smaller screens
const dates = {
    data: datesData,
    render: renderRows
}

const emptyRow = {
    render: renderEmptyRow
}

export const largeGrid = {
    years,
    months,
    dates,
    emptyRow
}

const deadlineDataSmall: YearSmall[] = [
    {
        year: 2024,
        months: [
            {
                month: 'Nov',
                dates: [
                    { day: 15, description: 'Open for Entries', backgroundColor: 'secondary' },
                    { day: 25, description: 'Selection Process Starts*', backgroundColor: 'tertiary' }
                ]
            },
            {
                month: 'Dec',
                dates: [
                    { day: 13, description: 'Deadline', backgroundColor: 'secondary' },
                    { day: 20, description: 'End of Selection', backgroundColor: 'tertiary' },
                    { day: 24, description: 'Awarded!', backgroundColor: 'quaternary' }
                ]
            }
        ]
    },
    {
        year: 2025,
        months: [
            {
                month: 'Jan',
                dates: [
                    { day: 2, description: 'Site Work Starts', backgroundColor: 'tertiary' }
                ]
            },
            {
                month: 'Feb',
                dates: [
                    { day: 13, description: 'Site is launched', backgroundColor: 'tertiary' }
                ]
            }
        ]
    }
];

interface DateSmall {
    day: string | number;
    description: string;
    backgroundColor: 'secondary' | 'tertiary' | 'quaternary';
    textColor?: "black";

}

interface MonthSmall {
    month: string;
    dates: DateSmall[];
}

interface YearSmall {
    year: number;
    months: MonthSmall[];
}

const renderSmallGrid = (deadlineData: YearSmall[]) => {
    return deadlineData.map(({ year, months }, yearIndex) => {
        const isFirstYear = yearIndex === 0;
        const isLastYear = yearIndex === deadlineData.length - 1;
        return (
            <div key={`small-${year}-${yearIndex}`}>
                <div className={`row year bg-tertiary border-sides ${isFirstYear ? "border-top border-radius-sides-top" : ""}`}>{year}</div>
                <div>
                    {months.map(({ month, dates }, monthIndex) => {
                        const isLastMonth = monthIndex === months.length - 1;
                        return (
                            <div key={`small-${month}-${monthIndex}`}>
                                <div className="row month border-sides">{month}</div>
                                <div className={`month-dates-small border-sides ${isLastYear && isLastMonth ? "border-bottom border-radius-sides-bottom" : ""}`}>
                                    {dates.map(({ day, description, backgroundColor }, dayIndex) => {
                                        return (
                                            <div key={`row small-${day}-${dayIndex}`} className="row-dates-small-container" >
                                                <div className={`row date row-date-small`}>
                                                    <div className={`date-day date-circle    bg-${backgroundColor} border-${backgroundColor} ${backgroundColor === "quaternary" ? "text-black" : ""}`}>{day}</div>
                                                    <div className={`date-description row-smal--text-align-left font-size--step-0`}>{description}</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    });
};


export const smallGrid = {
    data: deadlineDataSmall,
    render: renderSmallGrid
}