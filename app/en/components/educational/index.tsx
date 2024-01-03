import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const universityList = [
  {
    name: "Northeast Forestry University",
    major: "Software engineering",
    time: "2020/12 - 2023/06",
  },
  {
    name: "Gansu Construction Technical College",
    major: "Construction engineering",
    time: "2014/09 - 2017/06",
  },
];

export const Educational: React.FC = () => {
  return (
    <div className={clsx(styles.educational)}>
      <div className={clsx(styles.title)}>Educational experience</div>
      {universityList.map<React.ReactNode>(item => (
        <div className={styles.universitys} key={item.name}>
          <div className={styles.row1}>
            {item.name}
            <span>{item.time}</span>
          </div>
          <div className={styles.row2}>
            <div>Major in: {item.major}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
