import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

export const SkillList: React.FC = () => {
  return (
    <div className={clsx(styles.socialInfo)}>
      <div className={styles.title}>related skill</div>
      <ul>
        <li>
          <span className="mr-1">antd</span>team core member、<span className="mr-1">ahooks</span>
          team core member, Active in the GitHub community, contributing PRs to Next.js, Vite, and
          many other well-known open source libraries.
        </li>
        <li>
          Familiar with React and its principles, participated in the translation of React official
          documents, familiar with TypeScript, and has rich practical experience in React + TS.
        </li>
        <li>
          Familiar with front-end performance optimisation, e.g. code optimisation, packaging
          optimisation, resource optimisation, and able to optimise in conjunction with practical
          business scenarios.
        </li>
        <li>
          Familiar with the basic configuration of webpack / vite, the ability to the above tools
          for the second package, based on the above tools to build a common development
          environment.
        </li>
        <li>
          Familiar with prettier / eslint basic configuration, good and strict coding habits,
          customer-oriented, pragmatist.
        </li>
        <li>
          Familiar with the whole process of code development to go-live, and have deep best
          practices on collaborative development, branch management, project configuration, etc.
        </li>
      </ul>
    </div>
  );
};
