// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  presetIcons,
} from "unocss";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Inter"],
        mono: ["Source Code Pro"],
        serif: ["Merriweather"],
      },
    }),
    presetIcons(),
  ],
  transformers: [transformerAttributifyJsx(), transformerVariantGroup()],
  shortcuts: {
    link: "decoration-none text-light hover:text-accent border-b-dotted border-b-secondary border-b-2px hover:border-b-accent",
  },
  theme: {
    colors: {
      primary: "#4caf50",
      secondary: "#5e5a7e",
      accent: "#ff5722",
      dark: "#312f42",
      darker: "#0a090e",
      darkest: "#000000",
      light: "#d8d8d8",
      gray: "#545454",
      purple: "#543b60",
      blue: "#4690ff",
    },
    fontFamily: {
      sans: ["Inter"],
      mono: ["Source Code Pro"],
      serif: ["Merriweather"],
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
});
