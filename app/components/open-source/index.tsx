import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const repoList = [
  {
    name: "antd（核心成员之一）",
    star: "（88.5k star）",
    address: "github.com/ant-design/ant-design/pulls?q=is%3Apr+author%3Ali-jia-nan",
    contributeList: [
      "使用 ts 重构 js，将 antd github 代码仓库的 ts 覆盖率提升了 20%",
      "完成 css Token 迁移，将 cssinjs 迁移到 css 变量（其中四分之一由我完成）",
      "完成 antd 测试用例迁移，将测试库从 enzyme 迁移到 testing-lib（其中四分之一由我完成）",
      "负责 antd 新组件 FloatButton、QRCode、Flex 组件的开发，以及部分旧组件的变体开发和维护",
      "负责 antd 中的 Class 组件 => Function 组件的重构工作，完成所有 class 组件的重构",
      "参与各种 RFC 制定与落地、参与 issue 处理和 PR 的 code review",
      "参与新版官网开发，负责部分废弃组件迁移指南的文档编写、添加 warning 和废弃说明",
      "修复底层 rc 库大量 bug、完成 ts 类型增强、代码风格优化、性能优化等",
    ],
  },
  {
    name: "ahooks（核心成员之一）",
    star: "（12.8k star）",
    address: "github.com/alibaba/hooks/pulls?q=is%3Apr+author%3Ali-jia-nan",
    contributeList: [
      "添加全新 hook - useMutationObserver（已发布）",
      "添加全新 hook - useIndexDBState（RFC 阶段）",
      "承担 Effect 模块和 LifeCycle 模块 issue 以及 PR 处理",
      "参与各种 RFC 制定与落地、参与 issue 处理和 PR 的 code review",
      "在部分 hook 中添加新功能，适配更多场景，例如 useCountDown、useHover",
      "修复部分 bug、ts 类型强化、测试用例补充完善、提升稳定性",
    ],
  },
];

export const OpenSource: React.FC = () => {
  return (
    <div className={clsx(styles.openSource)}>
      <div className={clsx(styles.title)}>开源经历</div>
      {repoList.map<React.ReactNode>(repo => (
        <div className={styles.repo} key={repo.name}>
          <div className={styles.row1}>
            {repo.name}
            <span>{repo.star}</span>
          </div>
          <div className={styles.row2}>
            <div>
              贡献地址：
              <a href={`https://${repo.address}`} target="_blank">
                {repo.address}
              </a>
            </div>
          </div>
          <ul>
            {repo.contributeList.map<React.ReactNode>(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
