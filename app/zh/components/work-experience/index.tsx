import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const workList = [
  {
    name: "袋鼠云",
    time: "2021/11 - 2023/09",
    title: "高级前端工程师",
    department: "易知微 平台技术部 前端组",
    responsibilities: [
      "负责组内低代码应用协作平台DTable（LowCode + aPaaS方向）的开发建设工作",
      "负责组内数据流重构工作，负责多人协同文档的相关需求，抽离并扩展相关功能组件和方法",
      "负责组内 React Hook 仓库建设，目前已实现 100+ 个基于 ahooks 的功能 hook 和业务专用 hook",
      "负责组内实习生的面试 & CodeReview 工作",
    ],
  },
  {
    name: "杭州彩连科技",
    time: "2021/04 - 2021/11",
    title: "前端工程师",
    department: "研发中心 大前端组",
    responsibilities: [
      "主要负责 yoycol 官网相关业务需求、移动端响应式UI改造、bops 后台相关业务需求",
      "次要负责 yoycol 基础组件的维护，以及设计器部分功能的重构和迭代",
      "完成了分销体系、品牌定制、设计器等三大主要模块的开发以及后续迭代和维护工作",
      "在空余时间使用 tailwind css 重构了运营后台、以及 yoycol 部分通用组件",
    ],
  },
  {
    name: "杭州乐见科技",
    time: "2019/11 - 2020/12",
    title: "前端工程师",
    department: "研发部 前端组",
    responsibilities: [
      "在职期间负责微信小程序、H5项目的前端开发工作，独立负责项目从初期框架搭建到项目上线",
      "在项目上线之后持续迭代，完成了钻石商店、盒蛋、欧气蛋、月卡、扭蛋、退款等模块的开发",
      "制定了团队代码规范、git操作规范、埋点规范，制定了系分规范等技术文章，推动部门执行和遵守",
      "清理技术债，进行项目瘦身，删除掉5000多行冗余代码，封装多个组件，提高日常开发效率",
    ],
  },
];

export const WorkExperience: React.FC = () => {
  return (
    <div className={clsx(styles.work)}>
      <div className={clsx(styles.title)}>工作经历</div>
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
