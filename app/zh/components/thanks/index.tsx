import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

export const Thanks: React.FC = () => {
  return (
    <div className={clsx(styles.thanks)}>
      <div className={clsx(styles.title)}>致谢</div>
      <div className={clsx(styles.item)}>感谢您花时间阅读我的简历，期待有机会能和您共事。</div>
    </div>
  );
};
