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
    // TODO improve data type for correct languages
    data: number | string | { [key in "en" | "es" | "ptbr"]: string };
    gridColumn: string;
    align: string;
    class: DateClass;
    backgroundColor?: "secondary" | "tertiary" | "quaternary";
};

const datesData: Array<{ [key: string]: DateType[] }> = [
    {
        "Nov": [
            { data: 20, gridColumn: "1 / 3", align: "center", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
        "Dec": [
            { data: 18, gridColumn: "4 / 5", align: "right", class: DateClass.Number, backgroundColor: "secondary" },
            { data: 24, gridColumn: "6 / 7", align: "right", class: DateClass.Number, backgroundColor: "quaternary" },
        ],
    },
    {
        "Nov": [
            {
                data: {
                    en: "Open for entries",
                    es: "Abierto para propuestas",
                    ptbr: "Aberto para propostas"
                }, gridColumn: "1 / 4", align: "center", class: DateClass.Text
            },
        ],
        "Dec": [
            {
                data: {
                    en: "Deadline",
                    es: "Fecha límite",
                    ptbr: "Data limite"
                }, gridColumn: "4 / 6", align: "center", class: DateClass.Text
            },
            {
                data: {
                    en: "Awarded!",
                    es: "¡Premiado!",
                    ptbr: "Premiado!"
                }, gridColumn: "6 / 8", align: "center", class: DateClass.Text
            },
        ],
        "Jan": [
            { data: 4, gridColumn: "8 / 10", align: "center", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
        "Feb": [
            { data: 15, gridColumn: "11 / 13", align: "center", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
    },
    {
        "Jan": [
            {
                data: {
                    en: "Site work starts",
                    es: "Construcción comienza",
                    ptbr: "Construção começa"
                }, gridColumn: "8 / 11", align: "center", class: DateClass.Text
            },
        ],
        "Feb": [
            {
                data: {
                    en: "Site is launched",
                    es: "Página en línea",
                    ptbr: "Página no ar"
                }, gridColumn: "11 / 13", align: "center", class: DateClass.Text
            },
        ],
    },
    {
        "Nov": [
            { data: 22, gridColumn: "3 / 4", align: "left", class: DateClass.Number, backgroundColor: "tertiary" },
        ],
        "Dec": [
            { data: 22, gridColumn: "5 / 7", align: "center", class: DateClass.Number, backgroundColor: "secondary" },
        ],
    },
    {
        "Nov": [
            {
                data: {
                    en: "Selection process starts*",
                    es: "Selección comienza*",
                    ptbr: "Início da seleção*"
                }, gridColumn: "1 / 4", align: "center", class: DateClass.Text
            },
        ],
        "Dec": [
            {
                data: {
                    en: "End of selection",
                    es: "Fin de la selección",
                    ptbr: "Fim da seleção"
                }, gridColumn: "4 / 8", align: "center", class: DateClass.Text
            },
        ],
    },
];

const renderRows = (datesData: Array<{ [key: string]: DateType[] }>, months: Month[], lang: "en" | "es" | "ptbr") => {
    return datesData.map((dates, rowIndex) => (
        <React.Fragment key={`row-large-${rowIndex}`}>
            {renderRow(dates, months, lang)}
        </React.Fragment>
    ));
};

const renderRow = (dates: { [key: string]: DateType[] }, months: Month[], lang: "en" | "es" | "ptbr") => {
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
                                        {typeof col.data === "number" ? col.data : ""}
                                    </div>
                                ) : (
                                    <>{typeof col.data === "object" &&
                                        col.data !== null &&
                                        Object.values(col.data).every(value => typeof value === "string") ? col.data[lang] : ""}</>
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
                    { day: 20, description: { en: 'Open for entries', es: "Abierto para propuestas", ptbr: "Aberto para propostas" }, backgroundColor: 'secondary' },
                    { day: 22, description: { en: "Selection process starts*", es: "Selección comienza*", ptbr: "Início da seleção*" }, backgroundColor: 'tertiary' }
                ]
            },
            {
                month: 'Dec',
                dates: [
                    { day: 18, description: { en: "Deadline", es: "Fecha límite", ptbr: "Data limite" }, backgroundColor: 'secondary' },
                    { day: 22, description: { en: "End of selection", es: "Fin de la selección", ptbr: "Fim da seleção" }, backgroundColor: 'tertiary' },
                    { day: 24, description: { en: "Awarded!", es: "¡Premiado!", ptbr: "Premiado!" }, backgroundColor: 'quaternary' }
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
                    { day: 2, description: { en: "Site work starts", es: "Construcción comienza", ptbr: "Construção começa" }, backgroundColor: 'tertiary' }
                ]
            },
            {
                month: 'Feb',
                dates: [
                    { day: 13, description: { en: "Site is launched", es: "Página en línea", ptbr: "Página no ar" }, backgroundColor: 'tertiary' }
                ]
            }
        ]
    }
];

interface DateSmall {
    day: string | number;
    description: { [key in "en" | "es" | "ptbr"]: string };
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

const renderSmallGrid = (deadlineData: YearSmall[], lang: "en" | "es" | "ptbr") => {
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
                                                    <div className={`date-description row-smal--text-align-left font-size--step-0 margin-left--space-3xs`}>{description[lang]}</div>
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