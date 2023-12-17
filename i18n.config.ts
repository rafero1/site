export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      aboutMe: 'about me',
      funStuff: 'fun stuff',
      portfolio: 'portfolio',
    },
    pt_BR: {
      welcome: 'Bem-vindo',
      aboutMe: 'sobre mim',
      funStuff: 'coisas divertidas',
      portfolio: 'portfolio',
    }
  }
}));
