import DefaultTheme from "vitepress/theme";
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";
import "./styles/custom.css";
import "./styles/fonts.css";

import * as components from "./components";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueTippy, {
      directive: "tippy",
      component: "tippy",
      componentSingleton: "tippy-singleton",
      defaultProps: {
        placement: "top",
        allowHTML: true,
        arrow: true,
        theme: "custom",
        animation: "scale",
      },
    });
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};