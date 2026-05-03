import DefaultTheme from 'vitepress/theme'
import { MermaidPlugin } from 'vitepress-plugin-mermaid'
import '../../style/custom.css'

export default {
  extends: DefaultTheme,
  // 开发者：花小琪
  enhanceApp({ app }) {
    app.use(MermaidPlugin)
  },
}
