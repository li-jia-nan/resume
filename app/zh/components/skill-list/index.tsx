import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

export const SkillList: React.FC = () => {
  return (
    <div className={clsx(styles.socialInfo)}>
      <div className={styles.title}>相关技能</div>
      <ul>
        <li>
          <span className="mr-1">antd</span>团队成员、<span className="mr-1">ahooks</span>
          团队成员，活跃于<span className="mx-1">GitHub</span>开源社区，给
          <span className="ml-1">Next.js</span>、<span className="mr-1">Vite</span>
          等众多知名大型开源库贡献过 PR
        </li>
        <li>
          熟悉<span className="mx-1">React</span>及其原理，参与过
          <span className="mx-1">React 官方文档</span>
          翻译工作，熟悉<span className="ml-1">TypeScript</span>，拥有丰富的
          <span className="mx-1">React + TS</span>
          实战经验
        </li>
        <li>
          熟悉前端性能优化的实现，例如<span className="ml-1">代码优化</span>、<span>打包优化</span>
          、<span>资源优化</span>，能结合实际业务场景进行优化
        </li>
        <li>
          熟悉<span className="mx-1">webpack / vite</span>等打包工具的基本配置， 能够对以上工具进行
          <span className="ml-1">二次封装</span>、基于以上工具搭建通用的开发环境
        </li>
        <li>
          熟悉<span className="mx-1">prettier / eslint</span>基本配置，有良好且严格的编码习惯，
          <span>唯客户论</span>，<span>实用主义者</span>
        </li>
        <li>
          熟悉代码开发到上线全流程，对<span className="ml-1">协同开发</span>，<span>分支管理</span>
          ，<span className="mr-1">项目配置</span>等都有较深刻的最佳实践
        </li>
      </ul>
    </div>
  );
};
