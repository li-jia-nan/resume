import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const universityList = [
  { name: "东北林业大学", major: "软件工程", level: "本科", time: "2020/12 - 2023/06" },
  { name: "甘肃建筑职业技术学院", major: "建筑工程技术", level: "大专", time: "2014/09 - 2017/06" },
];

export const Educational: React.FC = () => {
  return (
    <div className={clsx(styles.educational)}>
      <div className={clsx(styles.title)}>教育经历</div>
      {universityList.map<React.ReactNode>(item => (
        <div className={styles.universitys} key={item.name}>
          <div className={styles.row1}>
            {item.name}
            <span>{item.time}</span>
          </div>
          <div className={styles.row2}>
            <div>{item.major}</div>
            <div>{item.level}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
