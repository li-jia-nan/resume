/* eslint-disable react/no-unescaped-entities */
import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

export const ProjectExperience: React.FC = () => {
  return (
    <div className={clsx(styles.projects)}>
      <div className={clsx(styles.title)}>Project experience</div>
      <div className={styles.project}>
        <div className={styles.level1}>
          DTable
          <a href="https://dtable.cloud" target="_blank">
            https://dtable.cloud
          </a>
        </div>
        <div className={styles.level2}>Project background</div>
        <div className={styles.level3}>
          In order to enhance the commercialization of Kangaroo Cloud's EzMicro Division and expand
          the new product category "Collaboration Documents", the team in this category has no
          front-end technology accumulation and cannot support the business demand pressure, and
          urgently needs a standardized, functionally complete, highly customizable, and
          continuously iterative internal collaboration tool with a compatible technology stack.
          Since there is no library on the market that meets this need, it was decided to develop
          its own collaboration documentation to meet the business requirements and to be highly
          scalable and maintainable.
        </div>
        <div className={styles.level2}>My Role</div>
        <div className={styles.level3}>
          Technically responsible for the DTable workbench project, as well as the design and
          implementation of the collaboration engine.
        </div>
        <div className={styles.level3}>DTable Owners of official website</div>
        <div className={styles.level3}>DTable Owners of backend management system</div>
        <div className={styles.level2}>Action</div>
        <div className={styles.level3}>
          Completion of the DTable workbench, website, back-office management system, pre-technical
          research and post-experience assessment, completion of the technical selection and
          architectural design.
        </div>
        <div className={styles.level3}>
          Completing the design and development of the centerpiece modules of the workbench, such as
          Table View, Form View, Kanban View, Picture Book View, Calendar View, and so on.
        </div>
        <div className={styles.level3}>
          Completion of advanced permissions control down to the cell in the table view and
          automation of data processing through automated robots
        </div>
        <div className={styles.level3}>
          Rely on websocket communication to achieve background data synchronization, and
          third-party data through the implementation of complex branching and approval flow
          configuration
        </div>
        <div className={styles.level3}>
          Promote the overall control of the progress of DTable's development, debugging and
          testing, as well as the coordination of resources and public relations during the process.
        </div>
        <div className={styles.level3}>
          Advancement of the DTable internal sharing/co-construction and external open-source
          process in the Group (internal sharing/co-construction audit phase before the end of the
          process)
        </div>
        <div className={styles.level2}>Challenges encountered</div>
        <div className={styles.level3}>
          Ecuadorian Collaboration Engine: Currently, there are fewer front-end open-source engines
          for dealing with collaborative conflicts and there is a lack of references. Therefore,
          after research, some of the ecuadorian logics use the diff-patch algorithm to ensure the
          final consistency of the data.
        </div>
        <div className={styles.level3}>
          Front-end performance issues: The implementation of the table view is not based on the
          mainstream canvas engine in the market, but on the native dom implementation, so it faces
          serious performance issues, which are basically solved by using immer.js with optimistic
          updating strategy after repeated polishing and experiments to ensure the final consistency
          of the data, and also to ensure the user experience in the strong interaction scenarios.
        </div>
        <div className={styles.level2}>Results</div>
        <div className={styles.level3}>
          Successfully went live and hosted over 18w+/month approvals in Kangaroo Cloud
        </div>
        <div className={styles.level3}>
          Highly portable, highly decoupled from the UI layer, and highly extensible forms engine
          for rapid import, extension, and customization across a wide range of related businesses.
        </div>
        <div className={styles.level3}>
          The only large front-end project in the Group so far submitted for commercialization
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.level1}>
          ant-design (core contributors)
          <a href="https://ant.design" target="_blank">
            https://ant.design
          </a>
        </div>
        <div className={styles.level2}>Project background</div>
        <div className={styles.level3}>
          Since most of the company's business systems use the antd series of component libraries,
          sometimes we encountered problems or summarized some new features, and hoped that they
          could be supported in the official libraries so that more business teams could benefit
          from them, so we participated in the open source contribution to the antd project, and
          open-sourced the project through business-driven open source.
        </div>
        <div className={styles.level2}>My Role</div>
        <div className={styles.level3}>Internal Open Source Contribution Leader</div>
        <div className={styles.level3}>
          One of 49 global contributors to the ant-design organization and one of 33 global
          contributors to the react-component organization.
        </div>
        <div className={styles.level2}>Action</div>
        <div className={styles.level3}>
          Business-driven open source: actively summarized some problems encountered in business
          development, submitted more than 600 PRs to various cardiovascular projects under the antd
          organization, and contributed 4 components to antd.
        </div>
        <div className={styles.level3}>
          As the main community developer, participated in the development of some component
          variants, participated in the css var migration, participated in the test library
          migration, refactored all class components into function components, and refactored most
          of the JavaScript using Typecript, increasing the ts coverage of the repository by 20%.
        </div>
        <div className={styles.level3}>
          Take the initiative to take on more community tasks: Use your spare time to take on more
          tasks in the antd community, such as solving user questions, fixing issue bugs, and
          participating in code reviews, assisting contributors with PR, participating in the
          development of various RFCs, and completing related work independently.
        </div>
        <div className={styles.level2}>Challenges encountered</div>
        <div className={styles.level3}>
          There was no guidance in the early stage, the first time to participate in the
          co-construction of open source projects, a lot of attention needs to be paid to the place
          do not know, there is no guide within the company, rely on yourself to read all kinds of
          blogs, files, sharing, and ask for advice on the target project's core contributors, and
          gradually grasp the various skills to participate in the open source community
          contributions
        </div>
        <div className={styles.level2}>Results</div>
        <div className={styles.level3}>
          Joined the ant-design team in 2022 and solved numerous known issues.
        </div>
        <div className={styles.level3}>Reach 6th in the contributions list in 2023.</div>
        <div className={styles.level3}>
          Solved many known problems and provided many convenient and fast new features for the
          company's various business systems.
        </div>
      </div>
    </div>
  );
};
