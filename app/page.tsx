import type { NextPage } from "next";
import {
  CommitGraph,
  PersonInfo,
  SocialInfo,
  SkillList,
  Introduction,
  Educational,
  OpenSource,
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
    <OpenSource />
    <ProjectExperience />
    <WorkExperience />
    <Thanks />
  </>
);

export default App;
