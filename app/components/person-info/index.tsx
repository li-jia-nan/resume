import React from "react";
import { MailOutlined, PhoneOutlined, WechatOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

export const PersonInfo: React.FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.title}>栗嘉男</div>
      <div className={styles.titleSub}>前端开发 / 开源爱好者 / 4年经验</div>
      <div className={styles.contact}>
        <div className={styles.item}>
          <PhoneOutlined />
          19941208872
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
