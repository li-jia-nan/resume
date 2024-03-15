import clsx from "clsx";
import React from "react";
import { datasetList, dayList, monthList } from "./dataset";
import styles from "./index.module.scss";

export const CommitGraph: React.FC = () => {
  return (
    <div className={clsx(styles.graphWrap)}>
      <table className={clsx(styles.contributionCalendarTable)}>
        <caption className={clsx(styles.srOnly)} />
        <thead>
          <tr style={{ height: 13 }}>
            <td style={{ width: 28 }} />
            {monthList.map<React.ReactNode>((item, i) => (
              <td className={styles.contributionCalendarLabel} colSpan={item.colSpan} key={i}>
                <span style={{ position: "absolute", top: 0 }}>{item.value}</span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {datasetList.map<React.ReactNode>((row, i) => (
            <tr key={`tr-${i}`}>
              {dayList.map<React.ReactNode>((day, j) =>
                i === j ? (
                  <td className={styles.contributionCalendarLabel} key={`td-${j}`}>
                    <span className={clsx(styles.contributionCalendarDay)}>{j % 2 ? day : ""}</span>
                  </td>
                ) : null,
              )}
              {row.map<React.ReactNode>((col, k) => (
                <td
                  key={`td-${k}`}
                  data-date={col.date}
                  data-level={col.level}
                  data-view-component={col.viewComponent}
                  className={styles.contributionCalendarDay}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableFooter}>
        <span>Less</span>
        {[0, 1, 2, 3, 4].map<React.ReactNode>(level => (
          <div
            key={level}
            data-level={level}
            className={clsx(styles.contributionCalendarDay, styles.level)}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};
