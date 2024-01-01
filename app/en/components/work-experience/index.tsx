import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const workList = [
  {
    name: "DTstack",
    time: "2021/11 - 2023/09",
    title: "Senior Front-End Engineer",
    department: "Front-end Group, Platform Technology Department",
    responsibilities: [
      "Responsible for the development and construction of the group's low-code application collaboration platform, DTable",
      "Responsible for data flow refactoring within the group, responsible for collaborating with multiple people to document requirements, extract and extend relevant functional components and methods.",
      "Responsible for building the React Hook repository in the team, currently 100+ functional and business-specific hooks based on ahooks have been implemented.",
      "Responsible for interviewing & Code Reviewing interns in the team.",
    ],
  },
  {
    name: "yoycol",
    time: "2019/11 - 2021/11",
    title: "Front-End Engineer",
    department: "R&D Centre front-end group",
    responsibilities: [
      "Mainly responsible for yoycol official website related business requirements, mobile responsive UI transformation, bops backend related business requirements.",
      "Secondary responsibility for the maintenance of yoycol's base components, as well as refactoring and iterating on some of the designer's functionality.",
      "Completed the development of three major modules, including distribution system, brand customisation and designer, as well as subsequent iterations and maintenance work",
      "In my spare time, I've refactored the operations backend and some of the general components of yoycol using tailwind css.",
    ],
  },
];

export const WorkExperience: React.FC = () => {
  return (
    <div className={clsx(styles.work)}>
      <div className={clsx(styles.title)}>Work experience</div>
      {workList.map<React.ReactNode>(company => (
        <div className={styles.company} key={company.name}>
          <div className={styles.row1}>
            <div className={styles.name}>{company.name}</div>
            <div className={styles.time}>{company.time}</div>
          </div>
          <div className={styles.row2}>
            <div>{company.title}</div>
            <div>{company.department}</div>
          </div>
          <ul>
            {company.responsibilities.map<React.ReactNode>(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
