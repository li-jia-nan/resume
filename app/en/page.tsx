import type { NextPage } from "next";
import clsx from "clsx";
import {
  CommitGraph,
  PersonInfo,
  SocialInfo,
  SkillList,
  Introduction,
  Educational,
  WorkExperience,
  ProjectExperience,
  Thanks,
} from "./components";
import styles from "./index.module.scss";

const App: NextPage = () => (
  <div className={clsx(styles.contentBox)}>
    <PersonInfo />
    <CommitGraph />
    <Introduction />
    <SocialInfo />
    <Educational />
    <SkillList />
    <ProjectExperience />
    <WorkExperience />
    <Thanks />
  </div>
);

export default App;
