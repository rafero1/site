export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'welcome',
      aboutMe: 'about me',
      funStuff: 'fun stuff',
      portfolio: 'portfolio',
    },
    pt_BR: {
      welcome: 'bem-vindo',
      aboutMe: 'sobre mim',
      funStuff: 'coisas divertidas',
      portfolio: 'portfolio',
    }
  }
}));
