import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";

export const Introduction: React.FC = () => {
  return (
    <p className={clsx(styles.introduction)}>
      4年+前端经验，拥有 2B/2C 多个项目经验，拥有丰富的 React + TS
      实践经验，积极参与行业内优秀前端技术框架开源共建，目前是 AntDesign 全球 49
      名核心成员之一、ahooks
      核心成员之一，乐于分享、对新技术保持高度敏感，喜欢钻研前沿优秀技术，喜欢研究一些优秀框架的源码，并梳理沉淀成技术文章和团队成员一起成长，有较强的技术判断力和业务敏锐度。
    </p>
  );
};
