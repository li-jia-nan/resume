/* eslint-disable react/no-unescaped-entities */
import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";
import { ANTD_DESIGN, YEAR } from "@/app/dataset";

export const Introduction: React.FC = () => {
  return (
    <p className={clsx(styles.introduction)}>
      {YEAR}+ years of front-end experience, with 2B/2C multiple project experience, with rich React
      + TS practical experience, actively participate in the industry's excellent front-end
      technology framework open source co-construction, is one of the {ANTD_DESIGN} core members of
      AntDesign global, is also one of the core members of the ahooks, willing to share, to maintain
      a high degree of sensitivity to new technologies, like to study cutting-edge technology, like
      to study some of the excellent framework of the source code, and sorted out the precipitation
      into a technical article and team members to grow together, have a stronger technical
      judgement and business acumen.
    </p>
  );
};
