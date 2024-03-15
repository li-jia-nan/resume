import React from "react";
import { PhoneOutlined, WechatOutlined, MailOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { YEAR } from "@/app/dataset";

export const PersonInfo: React.FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.title}>li-jia-nan</div>
      <div className={styles.titleSub}>
        Front-end developer / Open source enthusiast / {YEAR}+ years of experience
      </div>
      <div className={styles.contact}>
        <div className={styles.item}>
          <PhoneOutlined />
          +86 19941208872
        </div>
        <div className={styles.item}>
          <WechatOutlined />
          19941208872
        </div>
        <div className={styles.item}>
          <MailOutlined />
          574980606@qq.com
        </div>
      </div>
    </div>
  );
};
