import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const dataLst = [
  { name: "GitHub", link: "https://github.com/li-jia-nan" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/li-jia-nan" },
];

export const SocialInfo: React.FC = () => {
  return (
    <div className={clsx(styles.socialInfo)}>
      <div className={styles.title}>social message</div>
      {dataLst.map<React.ReactNode>(item => (
        <div className={styles.item} key={item.name}>
          {item.name}：
          <a href={item.link} target="_blank">
            {item.link}
          </a>
        </div>
      ))}
    </div>
  );
};
