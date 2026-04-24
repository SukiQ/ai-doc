import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Vibe Coding 中文指南',
  description: '从概念到实战，掌握 AI 驱动的新型编程方式',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#D97757' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Vibe Coding',

    nav: [
      { text: '概念', link: '/concepts/what-is-vibe-coding' },
      {
        text: '更多',
        items: [
          { text: 'Claude Code', link: '/vibe-tools/claude-code/getting-started' },
          { text: '编程工具', link: '/tools/comparison' },
          { text: '实践', link: '/practices/prompt-engineering' },
          { text: '开发框架', link: '/frameworks/openai-api' },
          { text: '实战案例', link: '/cases/fullstack-app' },
        ],
      },
    ],

    sidebar: {
      '/concepts/': [
        {
          text: 'Vibe Coding 概念',
          items: [
            { text: '什么是 Vibe Coding', link: '/concepts/what-is-vibe-coding' },
            { text: 'AI 编程的演进', link: '/concepts/ai-coding-evolution' },
            { text: 'AI 如何理解和生成代码', link: '/concepts/how-ai-writes-code' },
            { text: '编程相关的 LLM 概念', link: '/concepts/llm-for-coding' },
            { text: '术语表', link: '/concepts/glossary' },
          ],
        },
      ],
      '/tools/': [
        {
          text: 'AI 编程工具',
          items: [
            { text: 'Claude Code', link: '/vibe-tools/claude-code/getting-started' },
            { text: 'Cursor', link: '/tools/cursor' },
            { text: 'GitHub Copilot', link: '/tools/copilot' },
            { text: 'Windsurf', link: '/tools/windsurf' },
            { text: 'AI 编程工具横向对比', link: '/tools/comparison' },
            { text: '其他 AI 编程工具', link: '/tools/others' },
          ],
        },
      ],
      '/vibe-tools/claude-code/': [
        {
          text: '快速开始',
          items: [
            { text: '安装与快速开始', link: '/vibe-tools/claude-code/getting-started' },
            { text: '核心命令与交互', link: '/vibe-tools/claude-code/basic-usage' },
            { text: '项目配置与定制化', link: '/vibe-tools/claude-code/configuration' },
          ],
        },
        {
          text: '功能详解',
          items: [
            { text: '斜杠命令、记忆与技能', link: '/vibe-tools/claude-code/features' },
            { text: 'Hooks 与 MCP 服务器', link: '/vibe-tools/claude-code/hooks-and-mcp' },
            { text: 'IDE 集成', link: '/vibe-tools/claude-code/ide-integration' },
          ],
        },
        {
          text: '使用技巧',
          items: [
            { text: 'CLAUDE.md 编写', link: '/vibe-tools/claude-code/claude-md' },
          ],
        },
      ],
      '/practices/': [
        {
          text: 'Vibe Coding 实践',
          items: [
            { text: '编程提示工程', link: '/practices/prompt-engineering' },
            { text: '场景：新项目搭建', link: '/practices/new-project' },
            { text: '场景：功能开发与 Bug 修复', link: '/practices/modify-project' },
            { text: '场景：代码重构与迁移', link: '/practices/refactoring' },
          ],
        },
      ],
      '/frameworks/': [
        {
          text: 'AI 开发框架',
          items: [
            { text: 'OpenAI API', link: '/frameworks/openai-api' },
            { text: 'Anthropic API', link: '/frameworks/anthropic-api' },
            { text: 'LangChain', link: '/frameworks/langchain' },
            { text: 'LlamaIndex', link: '/frameworks/llamaindex' },
          ],
        },
      ],
      '/cases/': [
        {
          text: 'Vibe Coding 实战案例',
          items: [
            { text: '全栈应用从零到部署', link: '/cases/fullstack-app' },
            { text: 'REST API 快速开发', link: '/cases/api-development' },
            { text: '数据分析自动化', link: '/cases/data-analysis' },
            { text: '办公自动化脚本', link: '/cases/automation' },
            { text: 'AI Agent 应用开发', link: '/cases/agent-app' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anthropics/claude-code' },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright 2024-present',
    },

    outline: {
      level: [2, 4],
      label: '本页目录',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },
})
