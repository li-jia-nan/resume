import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

export const ProjectExperience: React.FC = () => {
  return (
    <div className={clsx(styles.projects)}>
      <div className={clsx(styles.title)}>项目经历</div>
      <div className={styles.project}>
        <div className={styles.level1}>
          DTable
          <a href="https://dtable.cloud" target="_blank">
            https://dtable.cloud
          </a>
        </div>
        <div className={styles.level2}>背景</div>
        <div className={styles.level3}>
          为提升袋鼠云旗下易知微事业部<span className="ml-1">商业化变现</span>
          ，扩展产品新品类“协同文档”，在该品类团队⽆前端技术积累，⽆法⽀撑业务需求压⼒，急需⼀个规范、功能完整、⾃定义程度高、技术栈契合且持续迭代的内部协同工具，⽬前市⾯上
          <span className="ml-1">没有满⾜需求的库</span>，故决定
          <span className="mx-1">⾃研协同文档</span>
          以满⾜业务需求及⾼扩展性和维护性
        </div>
        <div className={styles.level2}>角色</div>
        <div className={styles.level3}>
          DTable 工作台项目的<span className="mx-1">技术负责⼈</span>以及
          <span className="mx-1">协同引擎设计和实现者</span>
        </div>
        <div className={styles.level3}>
          DTable 官网项目的<span className="ml-1">owner</span>，独立开发
        </div>
        <div className={styles.level3}>
          DTable 后台管理的<span className="ml-1">owner</span>，独立开发
        </div>
        <div className={styles.level2}>行动</div>
        <div className={styles.level3}>
          完成 DTable 工作台、官网、后台管理系统的前期<span className="mx-1">技术调研</span>和后期
          <span className="ml-1">体验评估</span>、完成<span className="mx-1">技术选型</span>和
          <span className="ml-1">架构设计</span>
        </div>
        <div className={styles.level3}>
          完成工作台中<span className="ml-1">表格视图</span>、<span>表单视图</span>、
          <span>看板视图</span>、<span>画册视图</span>、<span className="mr-1">日历视图</span>
          等核⼼模块的设计与开发⼯作
        </div>
        <div className={styles.level3}>
          完成表格视图中<span className="mx-1">精确到单元格</span>
          的高级权限控制，以及通过自动化机器人实现数据的<span className="mx-1">自动化处理</span>
        </div>
        <div className={styles.level3}>
          依赖<span className="mx-1">websocket</span>
          通信，实现后台数据同步，和第三方数据打通，实现复杂的分支和审批流配置
        </div>
        <div className={styles.level3}>
          推进 DTable 的开发、联调、测试的进度
          <span className="ml-1">整体把控及期间的资源协调和重难点公关</span>
        </div>
        <div className={styles.level3}>
          推进 DTable 在集团内部的<span className="mx-1">共享/共建</span>
          和外部开源进程（⽬前处于内部共享/共建审核阶段）
        </div>
        <div className={styles.level2}>遇到的挑战</div>
        <div className={styles.level3}>
          核⼼协同引擎：⽬前关于处理协同冲突的前端开源引擎较少，且
          <span className="ml-1">缺乏借鉴和参考</span>
          ，因此经过调研，部分核⼼逻辑使用了<span className="mx-1">diff-patch 算法</span>
          保证了<span className="ml-1">数据的最终一致性</span>
        </div>
        <div className={styles.level3}>
          前端性能问题：表格视图的实现并非采用市场主流的 canvas 引擎作为方案，而是使用原生 dom
          实现，所以面临严重的性能问题，经过反复打磨与实验，采⽤
          <span className="mx-1">immer.js</span>配合
          <span className="mx-1">乐观更新策略</span>
          基本解决，在保证数据最终一致性的前提下，也在
          <span className="ml-1">强交互场景中保证用户体验</span>
        </div>
        <div className={styles.level2}>结果</div>
        <div className={styles.level3}>
          成功落地上线并在袋鼠云<span className="mx-1">承载超过18w+/月</span>的审批数量
        </div>
        <div className={styles.level3}>
          产出了<span className="ml-1">⾼移植性</span>、<span>与UI层⾼解耦</span>、
          <span className="mr-1">⾼扩展性</span>
          的表格引擎，可在各⼤关联业务中极速引⼊、扩展、定制
        </div>
        <div className={styles.level3}>
          集团内<span className="ml-1">⽬前唯⼀提交准备商业化的⼤前端领域项⽬</span>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.level1}>
          Yoycol
          <a href="https://yoycol.com" target="_blank">
            https://yoycol.com
          </a>
        </div>
        <div className={styles.level2}>背景</div>
        <div className={styles.level3}>
          这是一款面向海外市场的大型跨境电商服务平台。拥有数百万用户和上万种商品。实现了“可见即可得”，为定制客户提供了更多的内容和流量。
        </div>
        <div className={styles.level2}>角色</div>
        <div className={styles.level3}>主力成员</div>
        <div className={styles.level2}>行动</div>
        <div className={styles.level3}>
          在职期间对<span className="mx-1">package.json</span>
          中的大部分框架和库做了升级和兼容，并且完成
          <span className="mx-1">90%页面</span>
          移动端适配
        </div>
        <div className={styles.level3}>
          集成<span className="mx-1">Sentry</span>
          并通过开发的错误通知服务，实现<span className="mx-1">异常上报</span>
          功能，及时处理错误，使得项目异常<span className="ml-1">减少了 80%</span>
        </div>
        <div className={styles.level3}>
          接入了第三方插件<span className="mx-1">swagger-axios-codepen</span>，通过 swagger
          接口文档自动生成接口函数，并且自动注入，为后续团队开发周期节约了大概
          <span className="mx-1">20%</span>时间
        </div>
        <div className={styles.level3}>
          对代码进行<span className="ml-1">全路由分割</span>，提升用户体验，配合
          <span className="ml-1">chunk 分包加载</span>，带来比较大的性能收益，
          <span className="mr-1">FCP 时间</span>从平均<span className="mx-1">4.1s</span>下降到平均
          <span className="ml-1">1.1s</span>
        </div>
        <div className={styles.level2}>遇到的挑战</div>
        <div className={styles.level3}>
          素材上传功能，接入<span className="mx-1">ImageMagick</span>的 wasm 版本，读取 icc
          配置文件，实现了在线的
          <span className="ml-1">cmyk 转 rgb</span>，从而解决了浏览器不支持直接解析 cmyk
          格式的图片的问题
        </div>
        <div className={styles.level2}>结果</div>
        <div className={styles.level3}>
          <span className="mx-1">全路由分割</span>配合
          <span className="mx-1">分包加载</span>
          带来巨大提升，根据小样本数据统计，北美地区平均加载速度从
          <span className="mx-1">5.7s</span>
          下降到<span className="ml-1">2.7s</span>，马来西亚、越南地区平均加载速度从
          <span className="mx-1">4.5s</span>下降到 <span className="ml-1">2.1s</span>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.level1}>
          ant-design
          <a href="https://ant.design" target="_blank">
            https://ant.design
          </a>
        </div>
        <div className={styles.level2}>背景</div>
        <div className={styles.level3}>
          由于公司绝⼤多数业务系统都在使⽤ antd
          系列的组件库，有时候遇到问题或是总结的⼀些新特性，希望能够在官⽅库中得到⽀持，⽅便更多的业务团队能够收益，故参与了
          antd 项⽬的开源贡献，通过业务驱动开源
        </div>
        <div className={styles.level2}>角色</div>
        <div className={styles.level3}>
          公司内部<span className="ml-1">开源贡献牵头⼈</span>
        </div>
        <div className={styles.level3}>
          ant-design 组织
          <span className="mx-1">全球 49 名核⼼贡献者</span>之一，react-component 组织
          <span className="mx-1">全球 33 名核⼼贡献者</span>之一
        </div>
        <div className={styles.level2}>行动</div>
        <div className={styles.level3}>
          业务驱动开源：积极总结业务开发中遇到的⼀些问题，向 antd 组织下的
          <span className="mx-1">多个核⼼项⽬</span>提交了超过<span className="mx-1">550 个</span>
          PR，向 antd 贡献了
          <span className="mx-1">五个新组件</span>
        </div>
        <div className={styles.level3}>
          作为社区开发主力，参与了部分组件的
          <span className="ml-1">变体开发</span>、参与了<span className="mx-1">css var 迁移</span>
          、参与了
          <span className="mx-1">测试库迁移</span>，将所有
          <span className="mx-1">class 组件</span>重构为<span className="mx-1">function 组件</span>
          ，并且使用 Typecript 重构了大部分 JavaScript， 将仓库的
          <span className="mx-1">ts 覆盖率提升了20%</span>
        </div>
        <div className={styles.level3}>
          主动承担更多社区任务：利⽤业余时间主动承担 antd 社区更多的任务，如：解决⽤户提问、修复
          <span className="ml-1">issue Bug</span>、并且参与<span className="ml-1">code review</span>
          、协助贡献者完成 PR、
          <span className="mx-1">深度参与各种 RFC</span>的制定与落地，并独⽴完成相关⼯作等
        </div>
        <div className={styles.level2}>遇到的挑战</div>
        <div className={styles.level3}>
          前期<span className="mx-1">⽆⼈指引</span>
          ，⾸次参与开源项⽬的共建，很多需要注意的地⽅都不懂，公司内部也
          <span className="mx-1">没有引路⼈</span>
          ，靠⾃⼰
          <span className="ml-1">翻阅各类博客、⽂章、分享以及请教⽬标项⽬的核⼼贡献者</span>
          ，逐步掌握参与开源社区贡献的各种技巧
        </div>
        <div className={styles.level2}>结果</div>
        <div className={styles.level3}>2022 年加入 ant-design 团队，解决了众多已知问题</div>
        <div className={styles.level3}>
          2023 年贡献排行榜<span className="ml-1">第6名</span>
        </div>
        <div className={styles.level3}>
          为公司各⼤业务系统
          <span className="ml-1">解决了众多已知问题和提供了众多⽅便快捷的新特性</span>
        </div>
      </div>
    </div>
  );
};
