import type { NextPage } from "next";
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

const App: NextPage = () => (
  <>
    <PersonInfo />
    <CommitGraph />
    <Introduction />
    <SocialInfo />
    <Educational />
    <SkillList />
    <ProjectExperience />
    <WorkExperience />
    <Thanks />
  </>
);

export default App;
