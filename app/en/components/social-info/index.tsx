import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const dataLst = [
  { name: "GitHub", link: "https://github.com/li-jia-nan" },
  { name: "linkedin", link: "https://www.linkedin.com/in/%E5%98%89%E7%94%B7-%E6%A0%97-1a0899278" },
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
