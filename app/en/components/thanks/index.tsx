import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

export const Thanks: React.FC = () => {
  return (
    <div className={clsx(styles.thanks)}>
      <div className={clsx(styles.title)}>a thanks</div>
      <div className={clsx(styles.item)}>
        Thank you for taking the time to read my CV, and I look forward to the opportunity to work
        with you.
      </div>
    </div>
  );
};
