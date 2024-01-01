// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Inter'],
        mono: ['Source Code Pro'],
        serif: ['Merriweather'],
      }
    }),
    presetIcons(),
  ],
  theme: {
    colors: {
      primary: '#4caf50',
      secondary: '#ff5722',
      dark: '#182128',
      darker: '#0d1216',
      veil: 'rgba(0, 0, 0, 0.8)',
      light: '#d8d8d8',
      gray: '#545454',
      green: '#a2c755',
      purple: '#543b60',
      blue: '#4690ff',
    },
    fontFamily: {
      sans: ['Inter'],
      mono: ['Source Code Pro'],
      serif: ['Merriweather'],
    },
  }
});
